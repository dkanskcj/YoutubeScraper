import { TagsComponent } from './../../tags/tags.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})

export class TagsComponent implements OnInit {

  @input() tagname: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
