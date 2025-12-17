import { Component, inject } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { ExercisesEdit } from "../exercises-edit/exercises-edit";
import { ExerciseService } from '../../services/exercise';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [ExercisesEdit],
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
      muscleGroup: 'petto',
      sets: 3,
      reps: 8,
      weightKg: 50,
      notes: 'Focus sulla tecnica, niente rimbalzi'
    },
    {
      id: 2,
      name: 'Lat machine avanti',
      muscleGroup: 'schiena',
      sets: 3,
      reps: 10,
      weightKg: 40,
      notes: 'Tirare al petto senza slanci'
    },
    {
      id: 3,
      name: 'Squat al multipower',
      muscleGroup: 'gambe',
      sets: 4,
      reps: 8,
      weightKg: 60,
      notes: 'Scendere almeno a parallelo'
    },
    {
      id: 4,
      name: 'Curl manubri in piedi',
      muscleGroup: 'bicipiti',
      sets: 3,
      reps: 12,
      weightKg: 10
    },
    {
      id: 5,
      name: 'French press bilanciere EZ',
      muscleGroup: 'tricipiti',
      sets: 3,
      reps: 10,
      weightKg: 25
    },
    {
      id: 6,
      name: 'Plank',
      muscleGroup: 'core',
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
