import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  isSubmitting = false;

  private apiContactUrl = '/api/contact';

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ReijBak', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/reijbak', icon: '💼' },
    { name: 'Email', url: 'mailto:stevencardona2001@gmail.com', icon: '✉️' },
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const { name, email, message } = this.contactForm.value;

      const payload = {
        content: `📬 **Nuevo mensaje de contacto desde el Portafolio**\n\n**Nombre:** ${name}\n**Email:** ${email}\n**Mensaje:**\n> ${message}`
      };

      this.http.post(this.apiContactUrl, payload).subscribe({
        next: () => {
          alert('¡Mensaje enviado con éxito!');
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error al enviar el mensaje:', err);
          alert('Error: No se pudo enviar el mensaje.');
          this.isSubmitting = false;
        }
      });
    }
  }
}
