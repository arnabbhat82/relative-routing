import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}
  goToChild() {
    this.router.navigate(['child']);
  }
  getPath() {
    console.log(this.location.path());
  }
  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }
}
