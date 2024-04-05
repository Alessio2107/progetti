import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  users!: any[];

  constructor(private services: AppService, private router: Router) { }

  ngOnInit() {
    this.services.getAll().subscribe({
      next: (res: any) => {
        this.users = res;
      }
    });
  }

  vediDettaglio(user:any) {
    this.router.navigate(['/dettaglio', user.id]);

  }
  getImage(image:Blob|null):string|null {
    if (image instanceof Blob) {
      return URL.createObjectURL(image);
    }
    return null;
}
}



