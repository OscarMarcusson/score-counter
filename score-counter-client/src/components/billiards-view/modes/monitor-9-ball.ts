import { BilliardsBallModel } from "../billiards-view.component";
import { BilliardsBallInformation } from "../data/BilliardsBallInformation";

export class Monitor9Ball {
    static layout: BilliardsBallInformation[][] = [
        [{
            number: 5,
            color: '#fa802a',
            fill: true,
        }],
        [{
            number: 7,
            color: '#700d26',
            fill: true,
        },
        {
            number: 8,
            color: '#05071a',
            fill: true,
        }],
        [{
            number: 4,
            color: '#622bc2',
            fill: true,
        }, {
            number: 9,
            color: '#ffc012',
            fill: false,
        }, {
            number: 6,
            color: '#0d7051',
            fill: true,
        }],
        [{
            number: 2,
            color: '#4340de',
            fill: true,
        },
        {
            number: 3,
            color: '#e03131',
            fill: true,
        }],
        [{
            number: 1,
            color: '#ffc012',
            fill: true,
        }],
    ];

    static onSetBall(ball: BilliardsBallModel, balls: Record<number, BilliardsBallModel>) {
        switch (ball.ball?.number) {
            case 5:
                console.warn("score I");
                if (hasEarlierBalls(5)) {
                    alert("return ball to table");
                }
                else {
                    ball.enabled = false;
                }
                break;

            case 9:
                console.warn("score II");
                if (hasEarlierBalls(9)) {
                    alert("return ball to table");
                }
                else {
                    ball.enabled = false;
                    alert("victory");
                }
                break;

            default:
                ball.enabled = false;
                break;
        }


        function hasEarlierBalls(number: number) {
            for (let i = 1; i < number; i++) {
                const ball = balls[i];
                if (!ball) continue;
                if (ball.enabled) return true;
            }
            return false;
        }
    }
}