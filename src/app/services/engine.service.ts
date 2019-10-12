import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Shape } from 'app/models/shape.enum';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  private message =  new BehaviorSubject<string>("Select a symbol to start!");
  private engine = [
  // R, P, S
    [0, 1, -1], // R 
    [-1, 0, 1], // P
    [1, -1, 0]] // S
  currentWinner = this.message.asObservable();

  constructor() { }

  submitResult(shape: Shape){

    let choosenShapeAI = Math.floor((Math.random()*3));
    let choosenShapePC: number;

    // TODO: Replace shape enum with selection of objects
    // Convert chosen shape back to index
    switch (shape){
      case Shape.Rock: choosenShapePC = 0; break;
      case Shape.Paper: choosenShapePC = 1; break;
      case Shape.Scissors: choosenShapePC = 2; break;
    }

    // Get result from score matrix
    let result = this.engine[choosenShapeAI][choosenShapePC]
    let winner: string;
    
    // Display result
    switch (result){
      case -1: winner = "PC Wins"; break;
      case 1: winner = "Player Wins"; break;
      case 0: winner = "Draw!"; break;
    }

    this.message.next(winner)
  }

}
