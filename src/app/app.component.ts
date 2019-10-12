import { Component } from '@angular/core';
import { Shape } from "app/models/shape.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'Rock Paper Scissors';

  shape: Shape = Shape.Rock;

}
