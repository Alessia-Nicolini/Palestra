import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgStyle } from '@angular/common';
import { Session } from '../../models/session';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-session-exercises',
  imports: [FormsModule, DatePipe, NgStyle, RouterLink, RouterLinkActive],
  templateUrl: './session-exercises.html',
  styleUrl: './session-exercises.css',
})
export class SessionExercises {
  session: Session = new Session();
  exercises: Exercise[] = [];
  nameExs: string[] = [];
  showModal: boolean = false;
  selectedExercise!: Exercise;
  exerciseToEdit: Exercise = new Exercise();
  muscleGroups: string[] = ['Petto', 'Spalle', 'Gambe', 'Braccia', 'Core', 'Bicipiti', 'Tricipiti', 'Schiena'];
  date = new Date();
  title: string = '';

  ngOnInit() {
    const stored = localStorage.getItem('exercises');
    if (stored) {
      this.exercises = JSON.parse(stored);
    }
    this.nameExs = this.exercises.map(ex => ex.name);
    this.session.title = 'Sessione del ' + this.date.toLocaleDateString();
    this.session = JSON.parse(localStorage.getItem(`${this.session.title}`) || JSON.stringify(this.session));
  }

  onSelectExercise(name: string | null){
    if(!name) return;
    const ex = this.exercises.find(e => e.name === name);
    if(ex) {
      this.exerciseToEdit = {...ex};
      this.showModal = true; 
    }
  }

  saveSessionExercise(exerciseToEdit: Exercise) {
    this.showModal = false;
    this.session.exercises.push(exerciseToEdit);
    localStorage.setItem(`${this.session.title}`, JSON.stringify(this.session));
  }

   cancelModal() {
    this.showModal = false;
  }
}
