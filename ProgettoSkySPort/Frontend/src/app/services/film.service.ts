import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../model/Film';
import { MatDialog } from '@angular/material/dialog';
import { DialogEliminazioneComponent } from '../dialog-eliminazione/dialog-eliminazione.component';
import { DialogModificaComponent } from '../dialog-modifica/dialog-modifica.component';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getAllFilm(){
    return this.http.get('http://localhost:8099/api/filmController/mostraTuttiIFilm');
  }

  aggiungiFilm(filmData: Film) {
    return this.http.post('http://localhost:8099/api/filmController/aggiungiFilm', filmData);
  }

  eliminaFilm(id: number) {
    return this.http.delete(`http://localhost:8099/api/filmController/eliminaFilm/${id}`);
  }

  mostraFilmPerAnno(anno: number) {
    return this.http.get(`http://localhost:8099/api/filmController/mostraFilmPerAnno/${anno}`);
  }

  cercaFilmPerNome(nome: string){
    return this.http.get(`http://localhost:8099/api/filmController/cerca/${nome}`);
  }

  modificaFilmPerId(id: number, filmData: Film) {
    return this.http.put(`http://localhost:8099/api/filmController/modificaFilmPerId/${id}`, filmData);
  }
  cercaFilmPerRegista(regista: string){
    return this.http.get(`http://localhost:8099/api/filmController/cercaR/${regista}`);
  }



  apriDialogElimina(id: number): void {
    const dialogRef = this.dialog.open(DialogEliminazioneComponent, {
      width: '250px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eliminaFilm(id);
      }
    });
  }

  apriDialogModifica(film: Film): void {
    const dialogRef = this.dialog.open(DialogModificaComponent, {
      width: '500px',
      data: film
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.modificaFilmPerId(film.id, result);
      }
    });
  }
}
