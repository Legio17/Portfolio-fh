import { Component } from '@angular/core';

interface PageNavigation {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-fh';

  listOfNav: PageNavigation[] = [
    {
      link: '/',
      name: 'About',
      exact: true,
    },
    {
      link: '/projects',
      name: 'Projects',
      exact: true,
    },
    {
      link: '/skills',
      name: 'Skills',
      exact: true,
    },
  ];
}
