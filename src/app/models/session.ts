import { Exercise } from "./exercise";

export class Session {
    title: string = '';
    date: Date = new Date();
    exercises: Exercise[] = [];
}