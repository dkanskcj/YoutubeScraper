import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
   
  }
}
