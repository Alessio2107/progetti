import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8096/api/user/getAll');
  }
  addUser(user: any) {
    return this.http.post('http://localhost:8096/api/user/addUser', user);
  }
  getById(id: number) {
    return this.http.get(`http://localhost:8096/api/user/getById/${id}`);
  }
  deleteById(id: number) {
    return this.http.delete(`http://localhost:8096/api/user/deleteById/${id}`);
  }
  getAllNames() {
    return this.http.get('http://localhost:8096/api/user/getAllNames');
  }
}
