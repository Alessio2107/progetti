import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film.service';
import { Film } from './model/Film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaFilm: Film[] = [];


  constructor(private filmService: FilmService) {} 

  ngOnInit() {
    this.caricaTuttiIFilm();
  }

  caricaTuttiIFilm() {
    this.filmService.getAllFilm().subscribe({
      next: (e: any)=>{
        this.listaFilm=e;
      }
    })
  }
}
