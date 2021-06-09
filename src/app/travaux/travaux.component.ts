import { Component, OnInit } from '@angular/core';
import { Travaux } from '../shared/travaux/travaux.model';
import { TravauxService } from '../shared/travaux/travaux.service';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent implements OnInit {

  travaux: Travaux[] | null;

  constructor(private travauxService: TravauxService) { }

  ngOnInit(): void {
    this.travauxService.findAll()
      .subscribe(res => {
        this.travaux = res.body;
        this.picturePathRewriting();
        console.log(this.travaux);
      });
  }

  picturePathRewriting(): void {
    const path = '../back';
    // tslint:disable-next-line:prefer-for-of
    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.travaux.length; i++) {
      // @ts-ignore
      this.travaux[i].logo = this.travaux[i].logo.slice(1);
      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      this.travaux[i].logo = path.concat(this.travaux[i].logo);
    }
  }

}
