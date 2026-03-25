import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ReijBak', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/reijbak', icon: '💼' },
    { name: 'Email', url: 'mailto:reijbak@gmail.com', icon: '✉️' },
  ];
}
