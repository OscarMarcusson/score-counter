import { GameCard } from "./components/game-card.js";
import { ScoreRow } from "./components/score-row.js";

customElements.define("game-card", GameCard);
customElements.define('score-row', ScoreRow);



function gotoHome() {
    window.location.href = '';
}