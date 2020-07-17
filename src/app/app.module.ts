import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// routes
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
