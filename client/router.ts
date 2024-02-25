import { Router } from "@vaadin/router";
import "./pages/welcome";
import "./pages/share-code";
import "./pages/instructions";
import "./pages/play";
import "./pages/result/ganaste";
import "./pages/result/perdiste";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
    {path: "/", component: "welcome-page"},
    {path: '/share-code', component: 'share-code'},
    {path: '/instructions', component: 'instructions-page'},
    {path: '/play', component: 'play-screen'},
    {path: '/ganaste', component: 'win-el'},
    {path: '/perdiste', component: 'lose-el'},
    // agregar los paths de ganaste / perdiste y ver como invocarlos desde la page de play
    {path: "(.*)", redirect: "/" },
]);

export { router };

