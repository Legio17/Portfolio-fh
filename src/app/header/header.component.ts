import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'Filip Hudec';
  }

  ngOnInit(): void {}
}
