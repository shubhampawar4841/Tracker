import { Injectable } from '@angular/core';

interface WorkoutData {
  name: string;
  workouts: string[];
  numberOfWorkouts: number;
  totalWorkoutMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private localStorageKey = 'workoutData';

  constructor() {}

  getWorkouts(): WorkoutData[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  addWorkout(name: string, workoutType: string, minutes: number): void {
    let workouts = this.getWorkouts();
    const existingUser = workouts.find(w => w.name.toLowerCase() === name.toLowerCase());

    if (existingUser) {
      existingUser.workouts.push(workoutType);
      existingUser.numberOfWorkouts++;
      existingUser.totalWorkoutMinutes += minutes;
    } else {
      workouts.push({
        name,
        workouts: [workoutType],
        numberOfWorkouts: 1,
        totalWorkoutMinutes: minutes
      });
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(workouts));
  }

  clearWorkouts(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
