// guarda la info para compartir entre pages/componentes
// guardar en localStorage lo necesario
// interactuar con ls/API

const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:3000";

const state = {
    data: {},
    listeners: [],
    test(){
        fetch(API_BASE_URL + "/pepe", {
            // recordar que get es el metodo default, no es necesario especificarlo
            method: "get",
            headers: {
                "content-type": "application/json",
            }
        })
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
        })
    }
};

export { state };