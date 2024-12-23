import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from './circulo/circulo.component'; 
import { TrianguloComponent } from './triangulo/triangulo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CirculoComponent, // Declara el componente de círculo
    TrianguloComponent // Declara el componente de triángulo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    CommonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}