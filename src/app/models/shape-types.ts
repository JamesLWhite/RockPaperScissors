export enum ShapeColour{
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

export enum ShapeIcon{
    ROCK = "fa-hand-rock",
    PAPER = "fa-hand-paper",
    SCISSORS = "fa-hand-scissors"
}

export let Shapes = {
    Rock: {id: 0, icon: ShapeIcon.ROCK, displayName: "Rock", displayColor: ShapeColour.BLUE},
    Paper: {id: 1, icon: ShapeIcon.PAPER, displayName: "Paper", displayColor: ShapeColour.BLUE},
    Scissors: {id: 2, icon: ShapeIcon.SCISSORS, displayName: "Scissors", displayColor: ShapeColour.BLUE}
}

export class Shape {
    icon: string;
    id: number;
    displayName: string;
    displayColor: string;

    constructor(id: number, icon: string, displayName: string){
        this.id = id;
        this.icon = icon;
        this.displayName = displayName;
        this.displayColor = ShapeColour.BLUE 
    }

}


export class ShapeFactory {

    /**
     * Create new rock object
     */
    public createRock(): Shape {
        return new Shape(0, ShapeIcon.ROCK, "Rock")
    }
    
    
    /**
     * Create new rock object
     */
    public createPaper(): Shape {
        return new Shape(1, ShapeIcon.PAPER, "Paper")
    }
    
    
    /**
     * Create new rock object
     */
    public createScissors(): Shape {
        return new Shape(2, ShapeIcon.SCISSORS, "Scissors")
    }
}