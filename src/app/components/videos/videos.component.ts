import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() title: string;
  @Input() videoTitle: string;
  @Input() icon: string;
  @Input() tag: string;

  constructor() {}

  ngOnInit(): void {}
}
