import { Component, inject } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { ExercisesEdit } from "../exercises-edit/exercises-edit";
import { ExerciseService } from '../../services/exercise';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [ExercisesEdit, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './exercises-list.html',
  styleUrl: './exercises-list.css',
})
export class ExercisesList {
  exerciseToEdit: Exercise = new Exercise();
  editMode: boolean = false;
  addMode: boolean = false;
  editingId: number | null = null;
  exercisesService = inject(ExerciseService);

  exercises: Exercise[] = [
    {
      id: 1,
      name: 'Panca piana con bilanciere',
      muscleGroup: 'Petto',
      sets: 3,
      reps: 8,
      weightKg: 50,
      notes: 'Focus sulla tecnica, niente rimbalzi'
    },
    {
      id: 2,
      name: 'Lat machine avanti',
      muscleGroup: 'Schiena',
      sets: 3,
      reps: 10,
      weightKg: 40,
      notes: 'Tirare al petto senza slanci'
    },
    {
      id: 3,
      name: 'Squat al multipower',
      muscleGroup: 'Gambe',
      sets: 4,
      reps: 8,
      weightKg: 60,
      notes: 'Scendere almeno a parallelo'
    },
    {
      id: 4,
      name: 'Curl manubri in piedi',
      muscleGroup: 'Bicipiti',
      sets: 3,
      reps: 12,
      weightKg: 10
    },
    {
      id: 5,
      name: 'French press bilanciere EZ',
      muscleGroup: 'Tricipiti',
      sets: 3,
      reps: 10,
      weightKg: 25
    },
    {
      id: 6,
      name: 'Plank',
      muscleGroup: 'Core',
      sets: 3,
      reps: 30,
      notes: '30 secondi a serie'
    }
  ];

  ngOnInit() {
    this.exercises = this.exercisesService.initializeExercises(this.exercises);
  }

  editExercise(exercise: Exercise, id: number) {
    this.editMode = true;
    this.editingId = exercise.id;
    this.exerciseToEdit = { ...exercise };
  }

  deleteExercise(id: number) {
    const confirmed = confirm(`Sei sicuro di voler eliminare questo esercizio? `);
    if (confirmed) {
      this.exercises = this.exercises.filter(ex => ex.id !== id);
      this.exercisesService.saveExercisesToLocalStorage(this.exercises);
      alert('Esercizio eliminato!');
    }
  }

     insertExercise() {
     this.addMode = true;
     this.exerciseToEdit = new Exercise;
   }
}
