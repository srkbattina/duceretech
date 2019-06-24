import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public color = new Subject<any>();
  public font = new Subject<any>();


  constructor() { }
}
