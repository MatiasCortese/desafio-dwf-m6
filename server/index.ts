import * as express from "express";
import * as cors from "cors";
import { firestore, rtdb } from "./db";
import { nanoid } from "nanoid";
import * as process from "process";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const roomCollection = firestore.collection("rooms");
const userCollection = firestore.collection("users");

type choice = "piedra" | "papel" | "tijera";

// signup nos da de alta en la bd
app.post("/signup", async (req, res) => {
    try {
        const {userName} = req.body;
        const searchResponse = await userCollection
        .where("userName", 
        "==", userName)
        .get();
        if(searchResponse.docs.length === 0){
            // No hay user con ese userName. Entonces, lo creamos
            const newUserRef = await userCollection.add({
                userName
            });
            res.json({
                userId: newUserRef.id,
                userName,
                new: true
            });
        } else {
            // Hay un user
            const doc = searchResponse.docs[0];
            res.json({
                userId: doc.id,
                userName: doc.data().userName
            });
        }
    } catch (error) {
        console.error(`Error en la consulta ${error}`);
        res.status(500).json({ error: "Error en el servidor" });
    }
});

// login
app.post("/auth", async (req, res) => {
    try {
        const {userName} = req.body;
        const searchResponse = await userCollection
        .where("userName", "==", userName)
        .get();
        if (searchResponse.docs.length === 0) {
            res.status(404).json({ message: "User not found" });
        } else {
            const doc = searchResponse.docs[0];
            res.json({
                userName: doc.data().userName,
                userId: doc.id,
            });
        } 
    }
    catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// endpoint para crear un room y que nos devuelva su ID
app.post("/rooms", async (req, res) => {
    try {
        const { userId, userName } = req.body;
        const doc = await userCollection
        .doc(userId.toString()).get();
        if (doc.exists) {
            const longRoomIdNano = nanoid();
            const roomRef = rtdb.ref(`rooms/${longRoomIdNano}/currentGame/${userId}`);
            await roomRef.set({
                userName,
                userId,
                choice: "",
                online: false,
                start: false
            });
            const longRoomId = longRoomIdNano;
            const roomId = 1000 + Math.floor(Math.random() * 999);
            await roomCollection
            .doc(roomId.toString())
            .set({
                rtdbRoomId: longRoomId,
                history: []
            });
            res.json({
                longRoomId,
                friendlyRoomId: roomId.toString()
            });
        } else {
            res.status(401).json({
                message: "No existes"
            });
        } 
    } catch (error) {
        console.error("Error creating room:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// API para pushear un player dentro del currentGame de una room
// PROBAR QUE FUNCIONE Y AGREGARLE EL CHEKEO DE QUE NO TENGA YA 2 PLASHERS
app.post("/rooms/:roomId", async (req, res) => {
    try {
        const friendlyRoomId = req.params.roomId;
        const { userId, userName } = req.body;
        const room = await roomCollection.doc(friendlyRoomId.toString()).get();
        if (room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref(`rooms/${longRoomId}/currentGame`);
            const snapshot = await roomRef.once("value");
            const currentPlayers = snapshot.numChildren();
            if (currentPlayers >= 2) {
                res.json({
                    message: "La sala ya está llena. No puedes unirte.",
                    status: 409
                });
            } else {
                // Verificamos si el jugador ya está en la sala
                const playerSnapshot = await roomRef.child(userId).once("value");
                const playerExists = playerSnapshot.exists();
                if (!playerExists && currentPlayers < 2) {
                    await roomRef.child(userId).set({
                        userName: userName,
                        userId: userId,
                        choice: "",
                        online: true,
                        start: false
                    });
                    res.json({
                        message: "Jugador agregado al currentGame de la sala."
                    });
                } else {
                    res.json({
                        message: "El jugador ya está en la sala o la sala está llena."
                    });
                }
            }
        } else {
            res.json({
                message: "No existe una sala con ese ID."
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API PARA SETEAR EL ONLINE DE UN USER
app.post("/rooms/users/:userId/online", async (req, res) => {
    try {
        const userId = req.params.userId;
        const { friendlyRoomId } = req.body;
        const room = await roomCollection.doc(friendlyRoomId.toString()).get();
        if (room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref("rooms/" + longRoomId + "/currentGame/" + userId + "/online");
            await roomRef.set(true);
            res.json({ message: "propiedad online cambiada" });
        } else {
            res.json({ message: "no se pudo cambiar" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// API PARA SETEAR EL START DE UN USER
app.post("/rooms/users/:userId/start", (req, res) => {
    const userId = req.params.userId;
    const { friendlyRoomId } = req.body;
    // status = true || false
    const { status } = req.body;
    roomCollection
    .doc(friendlyRoomId.toString())
    .get()
    .then(room => {
        if (room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref("rooms/" + longRoomId + "/currentGame/" + userId + "/start");
            roomRef.set(status)
            .then(()=>{
                res.json({message: "propiedad start cambiada"})
            })
        }
        else {
            res.json({message: "no se pudo cambiar"})
        }
    })
});

// API PARA OBTENER UN HISTORY
app.get("/rooms/:roomId/history", async (req, res) => {
    try {
        // Obtener referencia al documento de la colección principal (rooms)
        const friendlyRoomId = req.params.roomId;
        const roomRef = await roomCollection
        .doc(friendlyRoomId.toString());
        // Obtener referencia a la subcolección (history) dentro del documento de la colección principal
        const historyRef = roomRef.collection("history");
        // Obtener los documentos de la subcolección (history)
        const snapshot = await historyRef.get();
        // Preparar los datos a enviar como respuesta
        const history = [];
        snapshot.forEach(doc => {
        history.push({
            // es necesario traer el ID de la jugada?
            // id: doc.id,
            data: doc.data()
        });
        });
        res.status(200).json({ history });
    } catch (error) {
        console.log('Error obteniendo historial de sala:', error);
    }
});

//  api para obtener un room ID
app.get("/rooms/:roomId", async (req, res) => {
    try {
        const friendlyRoomId = req.params.roomId;
        const room = await roomCollection.doc(friendlyRoomId.toString()).get();
        if(room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref("rooms/" + longRoomId);
            const data = await roomRef.get();
            res.json({
                rtdbRoomId: data.key,
            });
        } else {
            res.json({
                status: "error",
                message: "no ingresaste un roomId"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// api para checkear si en la room indicada ya existe un user logeado
// USAR DE MODELO PARA VER SI YA EXISTE EL USER EN LA ROOM, QUIZA NO SEA NECESARIO AHCER LA VUELTA DEL CHECK ROOM EXISTANTE DE NUEVOO
app.get("/rooms/:roomId/:userId", (req, res) => {
    const friendlyRoomId = req.params.roomId;
    const userId = req.params.userId;
    roomCollection
    .doc(friendlyRoomId.toString())
    .get()
    .then(room => {
        if (room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref("/rooms/" + longRoomId);
            roomRef
            .get()
            .then((data) => {
                res.json({
                    rtdbRoomId: data.key
                });
            })
        } else {
            res.json({
                status: "error",
                message: "no ingresaste un roomId"
            })
        }
    })
});

// API QUE NOS PERMITA SETEAR UN CHOICE
app.post("/rooms/users/:userId/choice", async (req, res) => {
    try {
        const userId = req.params.userId;
        const { friendlyRoomId } = req.body;
        const {choice} = req.body;
        const room = await roomCollection.doc(friendlyRoomId.toString()).get();
        if (room.exists) {
            const longRoomId = room.get("rtdbRoomId");
            const roomRef = rtdb.ref("rooms/" + longRoomId + "/currentGame/" + userId + "/choice");
            await roomRef.set(choice);
            res.json({ message:`"propiedad choice cambiada y es ${choice}` });
        } else {
            res.json({ message: "no se pudo cambiar" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// API PARA CREAR UN HISTORY
app.post("/rooms/:roomId/history", async (req, res) => {
    const friendlyRoomId = req.params.roomId;
    const { playerOneId, playerOneChoice, playerTwoId, playerTwoChoice } = req.body;
    const roomRef = await roomCollection
    .doc(friendlyRoomId.toString());
    const roomHistoryRef = await roomRef.collection("history");
    // aca hay algo bueno y es que se esta creando una ruta por ejemplo rooms/roomId/history/jugadaId, es decir, dentro de ella podriamos pushear dos objetos. Cada uno contendria el ID del player y el choice. El tema es que, si a esta API le pegamos desde el frontend, se va a pushear doble por estar siendo pegada desde 2 clientes
    await roomHistoryRef.add({
        "playerOneId": playerOneId,
        "playerOneChoice": playerOneChoice,
        "playerTwoId": playerTwoId,
        "playerTwoChoice": playerTwoChoice
    });
    res.json({message: "success"})
});

app.use(express.static("dist"));

app.get("*", (req, res) => {
    res.sendFile("../" + __dirname + "/dist/index.html");
});

app.listen(port, () => console.log("conectado al puerto ", port));

// 1. version inicial
    // estructura (carpetas/archivos)
    // front basico (una pantalla que llame al back)
    // back basico (un endpoint)
    // deploy a Render, si esto funciona, avanzamos

// 2. version avanzada
    // funciona. El juego esta armado, pero desprolijo, trae info demas, pero se puede jugar y va para adelante

// 3. etapa de correccion y ajustes
    // sacar codigo demas
    // mejorar la lectura del codigo, nombre de vars, funciones, archivos, etc
    // chequeo paso a paso

