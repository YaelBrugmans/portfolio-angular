import { Presentation } from '../shared/presentation/presentation.model';
import { PresentationService } from '../shared/presentation/presentation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentation?: Presentation[] | null;
  line?: boolean;

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

  checkTitle($pres: string | undefined, $title: string): boolean{
    this.line = $pres === $title;
    return this.line;
  }
}
