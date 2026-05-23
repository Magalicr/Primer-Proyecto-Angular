import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Desarrollo en Angular';
  subtitulo='Curso UTN, primeros pasos con Angular.';
  subtitulo1='Mi primer pagina';
}


