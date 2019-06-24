import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bgcolor: string;
  text: string;
  font: string;
  constructor( private colorservice: ColorService) {
    this.colorservice.color.subscribe(message => {
      //  console.log('*******************', message);
// tslint:disable-next-line: triple-equals
       if (message != undefined || message != null) {
      // console.log('*******************-->>>>>>', message);
      this.bgcolor =  message.header.bgcolor;
      this.text = message.header.color;
    }
    });

  }

  ngOnInit() {
    this.colorservice.font.subscribe(message => {
        // console.log('valuetheme', message);
        this.font = message.font;
});
 }

}
