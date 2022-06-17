import { IndexService } from '../shared/index/index.service';
import { Index } from '../shared/index/index.model';
import { Component, OnInit } from '@angular/core';
import {ImageService} from "../shared/img/image.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {

  inde?: Index[] | null;

  constructor(private indexService: IndexService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.indexService.findAll()
      .subscribe(res => {
        this.inde = res.body != null ? res.body : [];
        this.picturePathRewriting();
        // this.indexArrayUpdate();
        console.log(this.inde.length);
      } );
    this.indexService.findAll()
        .subscribe(res => {
          this.inde = res.body != null ? res.body : [];
          this.picturePathRewriting();
          // this.indexArrayUpdate();
          console.log(this.inde.length);
        } );
  }

  indexArrayUpdate(): void{
    if (this.inde) {
      const size = this.inde.length;
      if (size % 3 !== 0) {
        let i = size;
        console.log('Debut de la boucle index');
        while (i % 3 !== 0) {
          this.inde.push({image: '', title: '', response: ''});
          i++;
          console.log(this.inde.length);
        }
      }
    }
  }

  picturePathRewriting(): void{
    const path = '';
    // tslint:disable-next-line:prefer-for-of
    // @ts-ignore
    if (this.inde) {
      // for (let i = 0; i < this.inde.length; i++) {
      //   this.inde[i].image_index = this.inde[i].image_index.slice(1);
      // @ts-ignore
      //   this.inde[i].image_index = path.concat(this.inde[i].image_index);
      // }
      for (const ind of this.inde) {
        if (ind.image) {
          ind.image = ind.image.slice(0);
          ind.image = path.concat(ind.image);
        }
      }
    }
  }
}
