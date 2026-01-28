import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCardComponent {
  title = input.required<string>();
  skills = input.required<string[]>();
  accentColor = input<string>('#22d3ee');
}
