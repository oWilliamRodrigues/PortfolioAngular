import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Home, About, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('sectionAnimation', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ opacity: 0, transform: 'translateY(-100%)' })
            )
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(100%)' }),
            animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class App {
  activeSection = 'home';

  onSectionChange(section: string) {
    this.activeSection = section;
  }
}
