import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  maintitle = 'Youtube Scraper';
  currentCategory = '전체';
  constructor() {}

  ngOnInit(): void {}
}
