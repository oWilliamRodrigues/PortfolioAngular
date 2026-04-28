import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image?: string;
  github: string;
  languages: string[];
}

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {
  projects: Project[] = [
    {
      title: 'MyRecipeBook',
      description: 'API REST em .NET estruturada com DDD e SOLID. Possui autenticação JWT/Google, integração com Gemini para receitas automáticas e mensageria com Azure Service Bus. Inclui testes automatizados, CI/CD e suporte a MySQL/SQL Server.',
      image: 'assets/img/api.png',
      github: 'https://github.com/oWilliamRodrigues/MyRecipeBook',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
      ]
    },
    {
      title: 'Portfolio',
      description: 'Este site! Desenvolvido com Angular 20, Bootstrap 5 e AOS para animações fluidas e design responsivo.',
      image: 'assets/img/backgroundimage.jpg',
      github: 'https://github.com/oWilliamRodrigues/PortfolioAngular',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
      ]
    },
    {
      title: 'CS Guide',
      description: 'Wiki especializada para Counter-Strike desenvolvida em ASP.NET MVC, com arquitetura em camadas e escalabilidade.',
      image: 'assets/img/csguide.png',
      github: 'https://github.com/oWilliamRodrigues/CsGuide',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'
      ]
    },
    {
      title: 'Pixel Adventure',
      description: 'Jogo de plataforma 2D vibrante desenvolvido na Unity, explorando física avançada e animações de personagens.',
      image: 'assets/img/pixeladventure.png',
      github: 'https://github.com/oWilliamRodrigues/PixelAdventure',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
      ]
    },
    {
      title: '3D Game Adventure',
      description: 'RPG de ação 3D com câmera isométrica, sistema de combate e IA de inimigos, criado inteiramente na Unity.',
      image: 'assets/img/3DGameAdventure.png',
      github: 'https://drive.google.com/drive/folders/1uXgPOh27hV3c5tAYy-7PDeOYgKSBYut9',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
      ]
    },
    {
      title: 'Geen CRUD',
      description: 'Sistema de gestão de clientes desenvolvido em ASP.NET MVC, focado em operações CRUD e UX intuitiva.',
      image: 'assets/img/MVC.jpg',
      github: 'https://github.com/oWilliamRodrigues/TelaClientes',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'
      ]
    },
  ];
}
