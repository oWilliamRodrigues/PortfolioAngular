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
      title: 'IWantapp',
      description: 'API em .NET 6 com C#, construída com foco em boas práticas, arquitetura limpa e integração com Entity Framework e Dapper.',
      image: '../../assets/img/api.png',
      github: 'https://github.com/oWilliamRodrigues/IWantApp',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
      ]
    },
    {
      title: 'Portfolio',
      description: 'Projeto feito com Angular e Bootstrap. Você está aqui agora.',
      image: '../../assets/img/backgroundimage.jpg',
      github: 'https://github.com/oWilliamRodrigues/Portifolio',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'
      ]
    },
    {
      title: 'PSET Database',
      description: 'Projeto feito em PostGreSQL, criando um banco de dados do zero, até seu código completo.',
      image: '../../assets/img/SQL.jpg',
      github: 'https://github.com/oWilliamRodrigues/uvv_bd1_si1n',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      ]
    },
    {
      title: 'Pixel Adventure',
      description: 'Projeto feito com Unity C#, criando um jogo de plataforma 2D.',
      image: '../../assets/img/pixeladventure.png',
      github: 'https://github.com/oWilliamRodrigues/PixelAdventure',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
      ]
    },
    {
      title: 'Pop\`s Soccer',
      description: 'Projeto desenvolvido no Alice3 em Java, criando um jogo de pênalti em que o jogador controla o cobrador.',
      image: '../../assets/img/SoccerAlice.png',
      github: 'https://github.com/oWilliamRodrigues/soccer_game_alice3',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
      ]
    },
    {
      title: 'Clientes CRUD',
      description: 'Projeto desenvolvido em C# e MVC, produzindo um aplicativo de gerenciamento de clientes e seus contatos.',
      image: '../../assets/img/MVC.jpg',
      github: 'https://github.com/oWilliamRodrigues/TelaClientes',
      languages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
      ]
    },
  ];
}
