import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Shape } from 'app/models/shape-types';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  public message =  new BehaviorSubject<string>("Select a symbol to start!");
  public shapeAI =  new BehaviorSubject<number>(-1);

  private engine = [
  // R, P, S
    [0, 1, -1], // R 
    [-1, 0, 1], // P
    [1, -1, 0]] // S

  currentWinner = this.message.asObservable();

  constructor() { }

  submitResult(shape: Shape){

    let choosenShapeAI = Math.floor((Math.random()*3))
    this.shapeAI.next(choosenShapeAI);

    // Get result from score matrix
    let result = this.engine[choosenShapeAI][shape.id]
    let winner: string;
    
    // Display result
    switch (result){
      case -1: winner = "Computer Wins!"; break;
      case 1: winner = "You Win!"; break;
      case 0: winner = "Draw!"; break;
    }

    this.message.next(winner)
  }

}
