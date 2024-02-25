// guarda la info para compartir entre pages/componentes
// guardar en localStorage lo necesario
// import { getDatabase, onValue } from "firebase/database";
import { rtdb } from "./index";
import { db, onValue } from "./rtdb";
import { Router } from "@vaadin/router";
import { map } from "lodash";

// interactuar con ls/API
type Jugada = "piedra" | "papel" | "tijera";

type Game = {
    computerPlay: Jugada,
    myPlay: Jugada
};

const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:3000/";

const state = {
    data: {
        userName: "",
        userId: "",
        rtdbData: {},
        friendlyRoomId: "",
        rtdbRoomId: "",
        online: false,
        start: false,
        history: ""
    },
    listeners: [],
    // Crear una function init () que recupere la data de LS
    init(){
        const lastStorageState = localStorage.getItem("state");
    },
    async signIn(userName, callback?){
        console.log("soy el async del signin");
        try {
            if (!userName){
                console.error(`No hay un email en el state`);
                return;
            }
            const response = await fetch(API_BASE_URL + "signup", {
                method: "post",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({userName: userName})
            });
            if (!response.ok){
                throw new Error (`HTTP Error! Status: ${response.status}`)
            }
            const data = await response.json();
            if (data) {
                // aca hacer el login, ya que el user existe
                await state.logIn(data.userName, data.userId, callback);
                if (callback) callback();
            }
        }
        catch (error){
            console.error(`Error en el signin: ${error}`)
        }
    },
    async logIn(userName, userId, callback?){
        try {
            console.log("Soy el async login")
            const cs = this.getState();
            const response = await fetch(API_BASE_URL + "auth", {
                method: "post",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({userName: userName, userid: userId,})
            })
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            cs.userName = data.userName;
            cs.userId = data.userId;
            state.setState(cs);
            if (callback) callback();
        }
        catch (error) {
            console.error("Error en logIn:", error);
        }
    },
    // crea un nuevo room
    async askNewRoom(callback?){
        try {
            console.log("desde el async askNewRoom");
            const cs = this.getState();
            if (!cs.userId){
                console.error(`No hay userId`);
                return;
            }
            const response = await fetch(API_BASE_URL + "rooms/", {
                method: "post",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({userId: cs.userId, userName: cs.userName})
            });
            if(!response.ok){
                throw new Error (`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            cs.friendlyRoomId = data.friendlyRoomId;
            cs.rtdbRoomId = data.longRoomId;
            this.setState(cs);
            if (callback) callback();
        }
        catch (error) {
            console.error(`Error en el askNewRoom ${error}`);
        }
    },
    // Ejemplo de cómo mantener sincronizada nuestra RTDB con una parte de nuestro state
    async listenDatabase(){
        console.log("dentro del listenDatabase()");
        const cs = this.getState();
        const rtdbRoomId = cs.rtdbRoomId.toString();
        //  Connection with RTDB;
        const rtdbRef = await rtdb.ref(db, "rooms/" + rtdbRoomId);
        onValue(rtdbRef, (snapshot) => {
            const value = snapshot.val();
            cs.rtdbData = value.currentGame;
            console.log(value);
            this.setState(cs);
        });
    },
    // Set online
    async setOnline(callback?){
        const cs = this.getState();
        cs.online = true;
        try {
            const response = await fetch(API_BASE_URL + `rooms/users/${cs.userId}/online`, {
                method: "post",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ friendlyRoomId: cs.friendlyRoomId})
            })
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
            const data = await response.json();
            state.setState(cs);
            if (callback) callback();
        }
        catch (error){
            console.error("Error en la solicitud:", error)
        }
    },
    // probar por que no funciona este metodo
    async setStart(status) {
        console.log("dentro del setStart");
        const cs = this.getState();
        cs.start = status;
        try {
            const cs = this.getState();
            const response = await fetch(API_BASE_URL + `rooms/users/${cs.userId}/start`, {
                method: "post",
                headers: { "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                friendlyRoomId: cs.friendlyRoomId,
                status: status})
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data) {
                console.log(data);
                state.setState(cs);
            } else {
                console.log("No hay datos");
            }
        }
        catch (error) {
            console.error("Error en setStart:", error);
        }
    },
    async checkRoomExistence(friendlyRoomId, callback?){
        try {
            // Una mejora seria aca chequear no solo si existe, si no tambien si ya tiene 2 players.
            const cs = this.getState();
            const response = await fetch(`${API_BASE_URL}rooms/${friendlyRoomId}`, {
                method: "get",
                headers: {"content-type": "application/json"},
            });
            const data = await response.json();
            if (data.status === "error"){
                console.log(`No existe un room con dicho ID`);
            }
            if (data.rtdbRoomId) {
                console.log("la room existe")
                cs.friendlyRoomId = friendlyRoomId;
                cs.rtdbRoomId = data.rtdbRoomId;
                this.setState(cs);
                if(callback) callback();
            }
        }
        catch (error){
            console.log(`Error en el checkRoomExistence:${error}`);
        }
    },
    // refactorizar y ver como funciona desde /instructions
    async setUserTwo(callback?){
        try {
            const cs = this.getState();
            const friendlyRoomId = cs.friendlyRoomId;
            const response = await fetch(`${API_BASE_URL}rooms/${friendlyRoomId}`, {
                method: "post",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    userId: cs.userId,
                    userName: cs.userName
                })
            })
            const data = await response.json();
            if (data.status === 409) {
                alert(data.message);
                location.reload();
            } else {
                console.log("Users ready para comenzar")
                if (callback) callback();
                return 1;
            }
        } catch (error) {
            console.error("Error en setUserTwo:", error);
        }
    },
    async onlineChecker(){
        if(location.pathname.includes("share-code")) {
            try {
                console.log(`entrando al online checker`);
                const rtdbData = map(this.getState().rtdbData);
                let counter = 0;
                rtdbData.forEach(player => {
                    if(player.online === true) {
                        counter++;
                    } else {
                        console.log(`Your opponen is not ready yet`);
                    }
                });
                if (counter === 2) {
                    Router.go("/instructions");
                } else {
                    console.log("Something went wrong!");
                }
            } catch (error) {
                console.error("Error en onlineChecker:", error);
            }
        }
        else {
            console.log("no estamos en share-code")
        }
    },
    async startChecker(){
        // aca podemos usar la data de la rtdb para chupar los nombres de los users
        // el problema debe ser esto. Queda dentro de listeners, por ende, siempre que se haga un setState posterior a esto, se va a ejecutrar, va a ver que son 2 users (counter === 2) y por eso va a ir a /play de nuevo. ESTO TIENE QUE PASAR ESTANDO SOLO EN EL INSTRUCTIONS
        if (location.pathname.includes("instructions")) {
            try {
                console.log(`entrando al start checker`);
                const rtdbData = map(this.getState().rtdbData);
                let counter = 0;
                rtdbData.forEach(player => {
                    if(player.start === true) {
                        counter++;
                    } else {
                        console.log(`Your opponen is not ready yet`);
                    }
                });
                if (counter === 2) {
                    console.log("redireccionando desde el startChecker")
                    Router.go("/play");
                } else {
                    console.log("Something went wrong!");
                }
            } catch (error) {
                console.error("Error en onlineChecker:", error);
            }
        }
        else {
            console.log("no estamos en /instructions");
        }
    },
    async setChoice(choice) {
        console.log("dentro del setChoice");
        const cs = this.getState();
        cs.choice = choice;
        try {
            const cs = this.getState();
            const response = await fetch(API_BASE_URL + `rooms/users/${cs.userId}/choice`, {
                method: "post",
                headers: { "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                friendlyRoomId: cs.friendlyRoomId,
                choice: cs.choice})
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data) {
                console.log(data);
                state.setState(cs);
            } else {
                console.log("No hay datos");
            }
        }
        catch (error) {
            console.error("Error en setStart:", error);
        }
    },
    async choicesChecker(){
        try {
            console.log(`entrando al choice checker`);
            const rtdbData = map(this.getState().rtdbData);
            let counter = 0;
            rtdbData.forEach(player => {
                if(player.online === true) {
                    counter++;
                } else {
                    console.log(`Your opponen is not ready yet`);
                }
            });
            if (counter === 2) {
                Router.go("/instructions");
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.error("Error en onlineChecker:", error);
        }
    },
    enterRoom(callback){
        const cs = state.getState();
        const friendlyRoomId = cs.friendlyRoomId.toString();
        // Seguir aca y preguntarse que debira hacer esta APi y este metodo
        fetch (API_BASE_URL + "rooms/" + friendlyRoomId, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            cs.rtdbRoomId = data.rtdbRoomId;
            callback();
        })
    },
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        console.log(this.listeners);
        for (const cb of this.listeners){
            cb(newState);
        }
        // Esto hace que halla siempre en LS un item con la ultima data
        localStorage.setItem("state", JSON.stringify(newState));
        console.log("Soy el state, he cambiado ", this.data);
    },
    subscribe(callback: (any) => any){
        this.listeners.push(callback);
    },
    unsubscribe(callback){
        this.listeners = [];
    },
    whoWin(myPlay:Jugada, opponentPlay:Jugada){
        const ganeConTijera = myPlay == "tijera" && opponentPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && opponentPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && opponentPlay == "piedra";
        const perdiContraTijera = myPlay == "papel" && opponentPlay == "tijera";
        const perdiContraPiedra = myPlay == "tijera" && opponentPlay == "piedra";
        const perdiContraPapel = myPlay == "piedra" && opponentPlay == "papel";
        const gane = [ganeConTijera, ganeConPapel, ganeConPiedra].includes(true);
        const perdi = [perdiContraTijera, perdiContraPapel, perdiContraPiedra].includes(true);
        if (gane) {
            return "Gané";
        }
        else if (perdi) {
            return "Perdí";
        }
        else {
            return "Empaté";
        }
    },
    // este metodo debe pegarle a la API que en /rooms/:roomdId/history guarda de cada player su ID y choice. Esto va a ir creando en history objetos con cada jugada. Al mismo tiempo, luego crearemos en el componente o page result un metodo que nos permita levantar esta data para ir mostrandola
    async savePlayInHistory(){
        console.log("dentro del savePlayInHistory");
        const cs = this.getState();
        const data = await map(cs.rtdbData);
        const playerOneId = data[0].userId;
        const playerOneChoice = data[0].choice;
        const playerTwoId = data[1].userId;
        const playerTwoChoice = data[1].choice;
        // iterar la data y obtener playerOneId, playerTwoId, playerOneChoice y playerTwoChoice para mandarla en el req.body
        try {
            // aca le pegamos a la room en Firestore
            const response = await fetch(API_BASE_URL + `rooms/${cs.friendlyRoomId}/history`, {
                method: "post",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ 
                    playerOneId: playerOneId,
                    playerOneChoice: playerOneChoice,
                    playerTwoId: playerTwoId,
                    playerTwoChoice: playerTwoChoice
                })
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data) {
                console.log(`soy la data guardada en el history ${data}`);
                state.setState(cs);
            } else {
                console.log("No hay datos");
            }
        }
        catch (error) {
            console.error("Error en setStart:", error);
        }
    },
    async getHistory(){
        // probar que entre
        try {
            const cs = this.getState();
             // fetcheemos para ver que trae
            const response = await fetch(`${API_BASE_URL}rooms/${cs.friendlyRoomId}/history`, {
                method: "get",
                headers: {
                    "content-type":"application/json"
                }
            });
            const data = await response.json();
            cs.history = await map(data);
            state.setState(cs);
        }
        catch (error){
            console.log(`Error fetcheando la data del room history ${error}`)
        }
    }
};

export { state };
