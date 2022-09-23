import { Component, OnInit } from '@angular/core';
type tagList = {
  name: string;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  tags: tagList[] = [
    {
      name: "전체"
    },
    {
      name: "필라테스"
    },
    {
      name: "식품 건강"
    },
    {
      name: "게임"
    },
    {
      name: "피트니스"
    },
    {
      name: "축구"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
