import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommentService } from 'src/service/comment/comment.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal: ElementRef;
  @Input() commentId: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commetService: CommentService
  ) { }

  ngOnInit(): void {
    // this.commentId = this.route.snapshot.params['id']
    // if(this.commentId){
    //   this.getComment(this.commentId)
    // }
    console.log(this.commentId)
  }


  getComment(id: number){
    this.commetService.getComment(id).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
