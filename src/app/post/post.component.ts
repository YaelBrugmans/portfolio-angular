import { Component, OnInit } from '@angular/core';
import {WorksModel} from "../shared/works/works.model";
import {WorksService} from "../shared/works/works.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: WorksModel["title"];
  description: WorksModel["description"];
  img: WorksModel["img"];
  date: WorksModel["date"];

  //@Input() WorksModel.title:string;

  constructor(private worksService: WorksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    //this.title = this.worksService.find(+id).title;
    //this.description = this.worksService.find(+id).description;
    //this.img = this.worksService.find(+id).img;
    //this.date = this.worksService.find(+id).date;
    //this.wat = this.worksService.find(+id).wat;
  }

}
