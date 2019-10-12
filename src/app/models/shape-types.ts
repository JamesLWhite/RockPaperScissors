export let Shapes = {
    Rock: {id: 0, icon: "fa-hand-scissors", displayName: "Rock"},
    Paper: {id: 1, icon: "fa-hand-rock", displayName: "Paper"},
    Scissors: {id: 2, icon: "fa-hand-paper", displayName: "Scissors"}
}

export interface Shape {
    id: number;
    icon: string;
    displayName: string;
}
