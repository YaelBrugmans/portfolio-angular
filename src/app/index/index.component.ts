import { IndexService } from './../shared/index/index.service';
import { Index } from './../shared/index/index.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  inde: Index[] | null;

  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
    this.indexService.findAll()
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(res => {
        this.inde = res.body != null ? res.body : [];
        this.picturePathRewriting();
        // this.indexArrayUpdate();
        console.log(this.inde.length);
      } );
  }

  indexArrayUpdate(): void{
    // @ts-ignore
    const size = this.inde.length;
    if(size%3 !== 0){
      let i = size;
      console.log('Debut de la boucle index');
      while (i%3 !== 0) {
        // @ts-ignore
        this.inde.push({image_index: '', titre_index:'', reponse:''});
        i++;
        // @ts-ignore
        console.log(this.inde.length)
      }
    }
  }

  picturePathRewriting(): void{
    const path = '../back';
    // tslint:disable-next-line:prefer-for-of
    // @ts-ignore
    for (let i = 0; i < this.inde.length; i++)
    {
      // @ts-ignore
      this.inde[i].image_index = this.inde[i].image_index.slice(1);
      // @ts-ignore
      this.inde[i].image_index = path.concat(this.inde[i].image_index);
    }
  }

}
