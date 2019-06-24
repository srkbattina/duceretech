import { Component, OnInit} from '@angular/core';
import { ColorService } from '../color.service';
import { throwMatDuplicatedDrawerError } from '@angular/material';

@Component({
  selector: 'app-theme1',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {


  color: string;
  message: string;
  bodycolor: string;
  textcolor: string;
  container: string;
  font: string;
  method: string;
  theme1active = false;
  theme2active = false;
  theme3active = false;
  Robotoactive = false;
  montserratctive = false;
  fontfamly: string;

  constructor(private colorservice: ColorService) {
    this.method = localStorage.getItem('method');
    this.fontfamly = localStorage.getItem('fon');
    this.themecalling();
    this.fontstyle();
  }

  ngOnInit() {

  }

  themecalling() {
// tslint:disable-next-line: triple-equals
    if (this.method == '1') {
      this.theme1();
      this.Roboto();
      this.theme1active = true;
// tslint:disable-next-line: triple-equals
    } else if ( this.method == '2') {
      this.theme2();
      this.theme2active = true;
// tslint:disable-next-line: triple-equals
    } else if (this.method == '3') {
      this.theme3();
      this.theme3active = true;
    } else {
      this.theme1();
      this.theme1active = true;
    }
  }
  fontstyle() {
// tslint:disable-next-line: triple-equals
    if (this.fontfamly == '1') {
      this.Roboto();
      this.Robotoactive = true;
// tslint:disable-next-line: triple-equals
    } else if ( this.fontfamly == '2') {
      this.montserrat();
      this.montserratctive = true;
    } else {
      this.Roboto();
      this.Robotoactive = true;
    }
  }

  theme1() {
    this.bodycolor = '#4F81BD';
    this.textcolor = '#FFFFFF';
    this.container = '#4BACC6';
    this.colorservice.color.next({header: {color: '#FFFFFF', bgcolor: '#4A452A'},
    footer: {color: '#FFFFFF', bgcolor: '#215986'}});
    localStorage.setItem('method', '1' );

  }

  theme2() {
    this.bodycolor = '#CEB5A7';
    this.textcolor = '#000000';
    this.container = '#A17C6B';
    this.colorservice.color.next({header: {color: '#000000', bgcolor: '#E0F2E9'},
    footer: {color: '#000000', bgcolor: '#5B7B7A'}});
    localStorage.setItem('method', '2' );
  }

  theme3() {
    this.bodycolor = '#759EB8';
    this.textcolor = '#2D2D2D';
    this.container = '#7392B7';
    this.colorservice.color.next({header: {color: '#2D2D2D', bgcolor: '#C5D5EA'},
    footer: {color: '#2D2D2D', bgcolor: '#B3C5D7'}});
    localStorage.setItem('method', '3' );
  }

  Roboto() {
    this.font = 'Roboto';
    this.colorservice.font.next({font: 'Roboto'});
    localStorage.setItem('fon', '1' );
  }
  montserrat() {
    this.font = 'monospace';
    this.colorservice.font.next({ font: 'monospace'});
    localStorage.setItem('fon', '2' );

  }

  }



