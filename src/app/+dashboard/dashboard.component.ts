import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ave-dashboard',
    template: `
    <h3>Dashboard</h3>
    <router-outlet></router-outlet>
  `
})
export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
