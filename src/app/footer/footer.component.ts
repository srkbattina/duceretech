import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  bgcolor: string;
  text: string;
  font: string;
  constructor( private colorservice: ColorService) {

    this.colorservice.color.subscribe(message => {
       this.bgcolor = message.footer.bgcolor;
       this.text = message.footer.color;

    });
  }
// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.colorservice.font.subscribe(message => {
        // console.log('valuetheme', message);
        this.font = message.font;
}); }}
