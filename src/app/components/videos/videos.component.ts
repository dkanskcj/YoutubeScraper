import { Component, Input, OnInit } from '@angular/core';

export type Videos = {
  title?: string;
  icon: string;
  videoTitle: string;
  tag: string;
};

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() title: string;
  // @Input() icon: string;
  // @Input() videoTitle: string;
  // @Input() tag: string;
  @Input() seeAll: string;
  @Input() link: string;

  videos: Videos[] = [
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      tag: '필라테스',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
