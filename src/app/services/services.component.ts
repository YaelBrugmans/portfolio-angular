import { Component, OnInit } from '@angular/core';
import { Services } from '../shared/services/services.model';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services?: Services[] | null;

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.findAll()
      .subscribe(res => this.services = res.body);
    console.log(this.services);
  }


}
