import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() inputType: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getClick: number = 1;

  isClicked(ev: any){
    if(ev){
      this.getClick = 2
    }
  }
}
