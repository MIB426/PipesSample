import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FormatFileSizePipe } from './format-file-size.pipe';
import { AnimateNumberPipe } from './animate-number.pipe';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';
import { HomeComponent } from './home/home.component';
import { StatefulPipesComponent } from './stateful-pipes/stateful-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    FormatFileSizePipe,
    AnimateNumberPipe,
    AsyncPipesComponent,
    HomeComponent,
    StatefulPipesComponent,
    CustomPipesComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
