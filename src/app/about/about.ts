import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  @Output() navigate = new EventEmitter<string>();

  onContactClick() {
    this.navigate.emit('contact');
  }

  onProjectsClick() {
    this.navigate.emit('projects');
  }
}
