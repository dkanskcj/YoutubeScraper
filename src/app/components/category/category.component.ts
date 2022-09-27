import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() value: string;
  @Input() isSelected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
