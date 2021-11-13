import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib3',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [
  ]
})
export class Lib3Component implements OnInit {

  @Input()
  title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
