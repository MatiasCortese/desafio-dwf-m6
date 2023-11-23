import { Router } from "@vaadin/router";
import "./pages/welcome";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
    {path: "/", component: "welcome-page"},
    {path: '/chat', component: 'chat-page'},
    {path: "(.*)", redirect: "/" },
]);

export { router };

