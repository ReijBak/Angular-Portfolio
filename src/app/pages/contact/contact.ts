import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  socialLinks = [
    { name: 'GitHub', url: '#', icon: '💻' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '✉️' },
  ];
}
