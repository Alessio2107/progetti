import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-dialog-eliminazione',
  templateUrl: './dialog-eliminazione.component.html',
  styleUrls: ['./dialog-eliminazione.component.css']
})
export class DialogEliminazioneComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEliminazioneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: FilmService) {}

  confermaEliminazione(): void {
this.service.eliminaFilm(this.data.id).subscribe({
  next: (data: any) => {
  }
})
this.dialogRef.close();


  }

  annullaEliminazione(): void {
    this.dialogRef.close(false);
  }

}
