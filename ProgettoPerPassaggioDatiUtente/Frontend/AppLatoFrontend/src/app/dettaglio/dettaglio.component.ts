import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  userDettaglio: any;

  constructor(private route: ActivatedRoute, private userService: AppService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getById(id).subscribe(
      (res: any) => {
        this.userDettaglio = res;
      }
    );
  }

}


