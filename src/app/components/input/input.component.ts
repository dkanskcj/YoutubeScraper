import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  // @Input() unit: string;
  
  @Input() placeholder? : string;
  @HostBinding ('class') class = 'h-full';

  constructor() { }

  ngOnInit(): void {
  }

}
