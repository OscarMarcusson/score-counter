import { GameCard as GameCard } from "./components/game-card.js";

customElements.define("game-card", GameCard);



function gotoHome() {
    window.location.href = '';
}