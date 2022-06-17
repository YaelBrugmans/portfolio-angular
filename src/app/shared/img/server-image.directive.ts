import {Directive, ElementRef, Input} from "@angular/core";
import {environment} from '../../../environments/environment.prod'

@Directive({
    selector: '[appServer Img]',
})

export class ServerImageDirective{
    get appServerImage(): string{
        return this.appServerImage;
    }

    @Input()
    set appServerImage(value){
        this.appServerImage = value;
        this.el.nativeElement.setAttribute('src', environment.imgBaseUrl + this.appServerImage);
    }

    private _appserverImage = "";

    constructor(private  el:ElementRef) {
    }
}