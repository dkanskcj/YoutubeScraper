import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() id: any;
  @Input() createdAt: Date = new Date();
  @Input() comment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
