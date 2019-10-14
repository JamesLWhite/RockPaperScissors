import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeComponent } from './components/shape/shape.component';
import { BoardComponent } from './components/board/board.component';
import { AiBoardComponent } from './components/ai-board/ai-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    BoardComponent,
    AiBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
