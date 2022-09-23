import { Component, Input, OnInit } from '@angular/core';

type tagList = {
  name: string;
}



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: tagList[] = [];
  // tags: tagList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
