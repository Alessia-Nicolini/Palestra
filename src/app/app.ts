import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise } from './models/exercise';
import { FormsModule } from '@angular/forms';
import { ExercisesList } from './components/exercises-list/exercises-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ExercisesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gym-app');
   editMode: boolean = false;
}
