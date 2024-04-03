import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Utente } from '../model/Utente';

@Component({
  selector: 'app-passaggio-dati',
  templateUrl: './passaggio-dati.component.html',
  styleUrls: ['./passaggio-dati.component.css']
})
export class PassaggioDatiComponent {
  @Input() utenteInput!: Utente;

  utenteViewChild!: Utente;
  utenteReference!: Utente;

  @ViewChild('cardReference') cardReference!: ElementRef;

  constructor() { }

  passaUtenteInput(utente: Utente) {
    this.utenteInput = utente;
  }

  passaUtenteViewChild(utente: Utente) {
    this.utenteViewChild = utente;
  }

  passaUtenteReference(utente: Utente) {
    this.utenteReference = utente;
  }

  aggiornaUtenteReference(utente: Utente) {
    this.utenteReference = utente;
  }
}
