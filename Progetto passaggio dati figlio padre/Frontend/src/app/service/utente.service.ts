import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:8096/api/utenteController/mostraTuttiGliUtenti');
  }

  addUser(user: any) {
    return this.http.post('http://localhost:8096/api/utenteController/creaUtente', user);
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8096/api/utenteController/eliminaUtente/${id}`);
  }

  updateUser(user: any) {
    return this.http.put('http://localhost:8096/api/utenteController/updateUser', user);
  }

}
