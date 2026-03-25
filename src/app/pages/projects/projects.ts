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
      title: 'Silicon Metrics',
      description: 'SiliconMetrics is a web application for gaming performance analysis and cost-per-FPS decision support.',
      technologies: ['.NET 8', 'Nuxt 4', 'Vue.js 3.5'],
      image: '',
      liveUrl: 'https://silmet.stevencardona.dev',
      repoUrl: 'https://github.com/orgs/Silicon-Metrics/repositories',
    },
    {
      title: 'TalentoPlus',
      description: 'A comprehensive web-based system for employee management in organizations.',
      technologies: ['.NET 9', 'Vue.js 3.5'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/ReijBak/TalentoPlus',
    },
    {
      title: 'Riwi wallet (frontend)',
      description: 'Central financial management service, providing expense validation, transaction management, ' +
        'budget rules, and user authentication',
      technologies: ['Vue.js 3.5'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/Team-Avaricia/Frontend',
    },
    {
      title: 'Multistore Tenancy',
      description: 'A multi-tenant system where different businesses can have their own online store, completely ' +
        'separate from the others, but managed from a central domain.',
      technologies: ['Laravel 12', 'PHP 8.2', 'Blade'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/ReijBak/Multistore-tenancy',
    },
  ];
}
