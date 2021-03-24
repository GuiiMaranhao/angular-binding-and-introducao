import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './components/meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './components/meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './modules/cursos/cursos.module';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { OutputPropertyComponent } from './components/output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
