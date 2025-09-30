import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home, About, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
