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
      title: 'TalentoPlus',
      description: 'Sistema web completo para la gestión de empleados en organizaciones. ' +
        'Permite administrar información del personal, importar datos masivamente ' +
        'desde archivos Excel, generar hojas de vida en PDF, y consultar información ' +
        'mediante lenguaje natural utilizando inteligencia artificial.',
      technologies: ['.NET 9', 'Vue.js 3.5'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/ReijBak/TalentoPlus',
    },
    {
      title: 'Riwi wallet (frontend)',
      description: 'Servicio central de gestión financiera, proporcionando ' +
        'validación de gastos, gestión de transacciones, reglas presupuestarias y ' +
        'autenticación de usuarios. El sistema se integra con bots de Telegram, ' +
        'paneles de control Vue.js y flujos de trabajo de automatización n8n.',
      technologies: ['Vue.js 3.5'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/Team-Avaricia/Frontend',
    },
    {
      title: 'Multistore Tenancy',
      description: 'Sistema multi-tenant para MultiStore donde diferentes negocios ' +
        'pueden tener su propia tienda online, completamente aislada de las demás, ' +
        'pero administrada desde un dominio central.',
      technologies: ['Laravel 12', 'PHP 8.2', 'Blade'],
      image: '',
      liveUrl: '#',
      repoUrl: 'https://github.com/ReijBak/Multistore-tenancy',
    },
  ];
}
