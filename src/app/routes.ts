import { Routes } from '@angular/router';
import { SkillsComponent } from './pages/skills/skills.component';
// pages
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
