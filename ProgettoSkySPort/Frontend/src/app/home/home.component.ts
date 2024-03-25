import { Component, OnInit } from '@angular/core';
import { Film } from '../model/Film';
import { FilmService } from '../services/film.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogModificaComponent } from '../dialog-modifica/dialog-modifica.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaFilm: Film[] = [];
  dataSource:any;
  displayedColumns: string[] = ['nome', 'annoUscitaDelFilm', 'durata', 'genere', 'regista','elimina','modifica'];


  constructor(private filmService: FilmService,private dialog: MatDialog) {}


  ngOnInit() {
    this.caricaTuttiIFilm();
  }

  caricaTuttiIFilm() {
    this.filmService.getAllFilm().subscribe({
      next: (films: any) => {
        this.listaFilm = films;
        this.dataSource=films;
      }
    });
  }



  elimina(id:number){
    this.filmService.apriDialogElimina(id);
  }

  modifica(film: Film) {
    this.filmService.apriDialogModifica(film);
  }

  apriDialogModifica(element: any): void {
    this.dialog.open(DialogModificaComponent, {
      data: element
    });
  }


}
