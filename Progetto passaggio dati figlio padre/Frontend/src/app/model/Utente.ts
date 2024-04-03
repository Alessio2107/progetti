export class Utente {
  id: number;
  nome: string;
  cognome: string;
  eta: number;

  constructor(id: number, nome: string, cognome: string, eta: number) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

}
