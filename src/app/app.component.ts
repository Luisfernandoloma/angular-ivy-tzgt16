import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  moles1:number=parseInt(prompt("ingresa un numero"));

  moles2:number=3;

  cromo:number=4;

}
