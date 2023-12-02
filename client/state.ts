// guarda la info para compartir entre pages/componentes
// guardar en localStorage lo necesario
// interactuar con ls/API
type Jugada = "piedra" | "papel" | "tijera";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada
};

const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:3000";

const state = {
    data: {},
    listeners: [],
    test(name){
        fetch(API_BASE_URL + "/pepe", {
            // recordar que get es el metodo default, no es necesario especificarlo
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
        })
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
};

export { state };