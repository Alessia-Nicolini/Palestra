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
  exercisesService = inject(ExerciseService);
  editMode: boolean = true;

  ngOnInit() {
    const stored = localStorage.getItem('exercises');
    if (stored) {
      this.exercises = JSON.parse(stored);
    }
    this.exerciseToEdit = this.exercise();
  }

  saveExercise() {
    if (!this.exerciseToEdit.name || this.exerciseToEdit.name.trim() === '') {
      alert('Il nome dell\'esercizio è obbligatorio! ⚠️');
      return;
    }
    if (this.exerciseToEdit.id === 0) {
      // assegno ID progressivo
      this.exerciseToEdit.id = this.exercises.length + 1;
      // inserisco l'esercizio nell'array
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
    // torno alla modalità visualizzazione (elenco)
    this.editMode = false;
    // resetto l'esercizio in modifica
    this.exerciseToEdit = new Exercise();
  }

  cancelEdit() {
    this.editMode = false;
    this.exerciseToEdit = new Exercise();
  }

}
