import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Shapes, Shape } from 'app/models/shape-types';

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

    // Get result from score matrix
    let result = this.engine[choosenShapeAI][shape.id]
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
