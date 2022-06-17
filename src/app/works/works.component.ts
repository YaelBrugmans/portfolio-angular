import {Component, Input, OnInit} from '@angular/core';
import { WorksModel } from '../shared/works/works.model';
import { WorksService } from '../shared/works/works.service';
import { ImageService } from "../shared/img/image.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
})
export class WorksComponent implements OnInit {

  works?: WorksModel[] | null;

  //@Input() title?: string;
  //@Input() description?: string;
  //@Input() img?: string;
  //@Input() link?: string;

  constructor(private worksService: WorksService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.worksService.findAll()
      .subscribe(res => {
        this.works = res.body;
        console.log(this.works);
      });
  }

}
