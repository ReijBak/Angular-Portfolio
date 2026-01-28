import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsPage {
  projects = [
    {
      title: 'Project Name',
      description: 'Brief description of the project and the technologies used.',
      technologies: ['C#', 'Vue.js'],
      image: '',
      liveUrl: '#',
      repoUrl: '#',
    },
  ];
}
