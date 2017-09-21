import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { AppComponent } from './app.component'; // Main
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';
import { TeamComponent } from './team/team.component';
import { IntroComponent } from './intro/intro.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  // { path: 'main-one', component: AppComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CommentsComponent,
    TeamComponent,
    
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
