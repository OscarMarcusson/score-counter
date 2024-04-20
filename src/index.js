import { GameCard } from "./components/game-card.js";
import { ScoreRow } from "./components/score-row.js";
import { ModalWindow } from "./components/modal-window.js";

customElements.define("game-card", GameCard);
customElements.define('score-row', ScoreRow);
customElements.define('modal-window', ModalWindow);



function gotoHome() {
    window.location.href = '';
}