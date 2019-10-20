export enum ShapeColour {
    RED = 'red',
    GREEN = 'green',
    DEFAULT = 'default'
}

export enum ShapeIcon {
    ROCK = 'fa-hand-rock',
    PAPER = 'fa-hand-paper',
    SCISSORS = 'fa-hand-scissors'
}

export class Shape {
    displayColor: string;

    constructor(public id: number, public icon: string, public displayName: string) {
        this.displayColor = ShapeColour.DEFAULT;
    }
}


export class ShapeFactory {

    public createRock(): Shape {
        return new Shape(0, ShapeIcon.ROCK, 'Rock');
    }

    public createPaper(): Shape {
        return new Shape(1, ShapeIcon.PAPER, 'Paper');
    }

    public createScissors(): Shape {
        return new Shape(2, ShapeIcon.SCISSORS, 'Scissors');
    }
}
