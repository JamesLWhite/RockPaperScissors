import { Component } from '@angular/core';
import { EngineService } from "app/services/engine.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public title = 'Rock Paper Scissors';
  public winner: string;

  constructor(private engineService: EngineService){}

  ngOnInit() {
    this.engineService.currentWinner.subscribe(winner => this.winner = winner)
  }  
}
