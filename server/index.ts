import * as express from "express";
import * as cors from "cors";
import { firestore, rtdb } from "./db";
import { nanoid } from "nanoid";
import * as process from "process";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// seguir aca viendo si ya funciona la conexion a firestore y rtdb
const roomCollection = firestore.collection("rooms");

roomCollection.doc("Pepe").set({name: "test"});

app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile("../" + __dirname + "/dist/index.html");
});

app.post("/pepe", (req, res) => {
    const { name } = req.body;
    roomCollection
    .doc(name)
    .set({name: "test"})
    .then(() => {
        res.json({
            message: "transaction ok"
        });
    })
})

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

