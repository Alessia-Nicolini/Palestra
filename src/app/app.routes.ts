import { Routes } from '@angular/router';
import { ExercisesList } from './components/exercises-list/exercises-list';
import { SessionExercises } from './components/session-exercises/session-exercises';
import { SessionStored } from './components/session-stored/session-stored';

export const routes: Routes = [
    {
        path: '',
        component: ExercisesList,
        title: 'Home page',
    },
    {
        path: 'session',
        component: SessionExercises,
        title: 'Sessione allenamento',
    },
    {
        path: 'sessionStored',
        component: SessionStored,
        title: 'Storico sessioni',
    }
];

