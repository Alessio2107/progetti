import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { Film } from '../model/Film';

@Component({
  selector: 'app-dialog-modifica',
  templateUrl: './dialog-modifica.component.html',
  styleUrls: ['./dialog-modifica.component.css']
})
export class DialogModificaComponent {
  filmForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogModificaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film,
    private fb: FormBuilder,
    private filmService: FilmService
  ) {
    this.filmForm = this.fb.group({
      nome: [data.nome],
      annoUscitaDelFilm: [data.annoUscitaDelFilm],
      durata: [data.durata],
      genere: [data.genere],
      regista: [data.regista]
    });
  }

  confermaModifica(): void {
    const filmData: Film = this.filmForm.value;
    this.filmService.modificaFilmPerId(this.data.id, filmData).subscribe({
      next: (response: any) => {
        this.dialogRef.close();
      }
    });
  }

  annullaModifica(): void {
    this.dialogRef.close();
  }
}
