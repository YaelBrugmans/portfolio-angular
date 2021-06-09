import { Services } from './../shared/services/services.model';
import { ServicesService } from './../shared/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  //@ts-ignore
  services: Services[] | null;

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.findAll()
      .subscribe(res => this.services = res.body);
      console.log(this.services);
  }

}
