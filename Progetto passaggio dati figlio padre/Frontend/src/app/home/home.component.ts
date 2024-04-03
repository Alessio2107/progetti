import { Component, ViewChild } from '@angular/core';
import { Utente } from '../model/Utente';
import { PassaggioDatiComponent } from '../passaggio-dati/passaggio-dati.component';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: Utente[] = [];
  public utenteSelezionato: Utente | null = null;

  @ViewChild('passaggioDati') passaggioDati!: PassaggioDatiComponent;

  constructor(private utenteService: UtenteService) { }

  ngOnInit(){
    this.utenteService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      }
    });
  }

  selezionaUtente(utente: Utente) {
    // this.passaggioDati.utenteInput = null;
    // this.passaggioDati.utenteViewChild = null;
    // this.passaggioDati.utenteReference = null;


    this.utenteSelezionato = utente;
    this.passaggioDati.passaUtenteViewChild(utente);
    this.passaggioDati.passaUtenteReference(utente);
  }
}
