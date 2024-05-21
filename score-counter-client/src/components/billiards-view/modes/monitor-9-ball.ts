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
}