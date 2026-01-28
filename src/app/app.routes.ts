import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/projects';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
