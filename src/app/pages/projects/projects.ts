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
      title: 'SiliconMetrics',
      description: 'SiliconMetrics is a web application for gaming performance analysis and cost-per-FPS decision support.',
      technologies: ['.NET 8', 'Nuxt 4', 'Vue 3.5'],
      image: '../../../../SiliconMetrics.png',
      liveUrl: 'https://silmet.stevencardona.dev',
      repoUrl: 'https://github.com/orgs/Silicon-Metrics/repositories',
    },
    {
      title: 'TalentoPlus',
      description: 'A comprehensive web-based system for employee management in organizations.',
      technologies: ['.NET 9', 'Vue 3.5'],
      image: '../../../../TalentoPlus.png',
      liveUrl: 'https://talentoplus.stevencardona.dev',
      repoUrl: 'https://github.com/ReijBak/TalentoPlus',
    },
    {
      title: 'Riwi wallet (frontend)',
      description: 'Central financial management service, providing expense validation, transaction management, ' +
        'budget rules, and user authentication',
      technologies: ['Vue 3.5'],
      image: '../../../../RiwiWallet.png',
      liveUrl: 'https://riwiwallet.stevencardona.dev',
      repoUrl: 'https://github.com/ReijBak/RiwiWallet-Frontend',
    }
  ];
}
