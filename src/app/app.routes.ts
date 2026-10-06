import { Routes } from '@angular/router';
import { Home } from './support/presentation/pages/home/home';
import { NewIssue } from './support/presentation/pages/new-issue/new-issue';
import { PageNotFound } from './shared/presentation/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: Home },
  { path: 'support/issues/new', component: NewIssue },
  { path: '**',  component: PageNotFound, }
];
