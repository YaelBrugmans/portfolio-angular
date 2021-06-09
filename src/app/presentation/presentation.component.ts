import { Presentation } from './../shared/presentation/presentation.model';
import { PresentationService } from './../shared/presentation/presentation.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  presentation: Presentation[] | null;
  line: boolean;

  constructor(
    private presentationService: PresentationService
    ) {  }

     ngOnInit(): void {
      this.presentationService.findAll()
      .subscribe(res => {
        this.presentation = res.body;
        console.log(this.presentation);
      });
    }

    checkTitle($pres: string | undefined, $title: string){
      this.line = false;
      if($pres === $title){
        this.line = true;
      }
      return this.line;
    }


}
