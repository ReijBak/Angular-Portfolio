import { Component } from '@angular/core';
import { TechBadgeComponent } from '../../components/tech-badge/tech-badge';
import { SkillCardComponent } from '../../components/skill-card/skill-card';

@Component({
  selector: 'app-home',
  imports: [TechBadgeComponent, SkillCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  name = 'Steven Cardona';
  role = 'Full Stack Developer';
  description = '🚀 Turning ideas into living code. Passionate about building exceptional web experiences and exploring new technological horizons. Where logic meets creativity.';

  previousRoles = [
    { role: 'Coder', company: 'Riwi', link: 'https://riwi.io/' },
  ];

  technologies = ['C#', 'Vue.js', 'Angular', 'Unity Engine'];

  specializations = [
    {
      title: 'Backend Development',
      color: '#a78bfa',
      skills: ['API Development', 'Microservices Architecture', 'Clean Architecture & Repository Pattern', 'Layered Development'],
    },
    {
      title: 'Frontend Development',
      color: '#22d3ee',
      skills: ['Vue.js Web Interfaces', 'Responsive Design', 'Component-Based Architecture'],
    },
  ];
}
