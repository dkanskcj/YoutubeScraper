import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent implements OnInit {
  @Input() test: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.test);
  }
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
