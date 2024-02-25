import { router } from "./router";
import "firebase/database";
import * as rtdb from "firebase/database";
import { state } from "./state";

(function(){
    state.init();
    router;
    // SEGUIR EL FLUJO DESDE EL PRINCIPIO PARA VER POR QUE NO FUNCIONA EL SET USERNAMe
})();

export { rtdb };
