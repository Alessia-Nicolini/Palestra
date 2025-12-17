import { Component, inject, input } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ExerciseService } from '../../services/exercise';

@Component({
  selector: 'app-exercises-edit',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './exercises-edit.html',
  styleUrl: './exercises-edit.css',
})
export class ExercisesEdit {
  exerciseToEdit: Exercise = new Exercise();
  exercises: Exercise[] = [];
  exercise = input.required<Exercise>();
  mode = input.required<string>();
  exercisesService = inject(ExerciseService);
  editMode = true;

  ngOnInit() {
    const stored = localStorage.getItem('exercises');
    if (stored) {
      this.exercises = JSON.parse(stored);
    }
    this.exerciseToEdit = this.exercise();

  }

  saveExercise() {
    if (!this.exerciseToEdit.name || this.exerciseToEdit.name.trim() === '') {
      alert('Il nome dell\'esercizio è obbligatorio!');
      return;
    }
    if (this.exerciseToEdit.id === 0) {
      this.exerciseToEdit.id = this.exercises.length + 1;
      this.exercises.push(this.exerciseToEdit);
    }
    else {
      const index = this.exercises.findIndex(ex => ex.id === this.exerciseToEdit.id);
      if (index !== -1) {
        this.exercises[index] = this.exerciseToEdit;
      }
    }
    window.location.reload();
    this.exercisesService.saveExercisesToLocalStorage(this.exercises);
    console.log('Esercizio salvato:', this.exerciseToEdit);
    this.editMode = false;
    this.exerciseToEdit = new Exercise();
  }

  cancelEdit() {
    this.editMode = false;
    this.exerciseToEdit = new Exercise();
  }

}
