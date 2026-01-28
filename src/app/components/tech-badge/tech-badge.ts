import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadgeComponent {
  name = input.required<string>();
}
