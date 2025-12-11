import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  saveExercisesToLocalStorage(exercises: Exercise[]){
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }

  getExercisesFromLocalStorage(): Exercise[] {
    const stored = localStorage.getItem('exercises');
    return stored ? JSON.parse(stored) : [];
  }

  initializeExercises(exercises: Exercise[]): Exercise[] {
    const stored = localStorage.getItem('exercises');
    if (stored) {
      return JSON.parse(stored);
    } else {
      this.saveExercisesToLocalStorage(exercises);
      return exercises;
    }
  }
  
}
