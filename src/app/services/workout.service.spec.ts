import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
    localStorage.clear(); // Clear storage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty workouts initially', () => {
    expect(service.getWorkouts().length).toBe(0);
  });

  it('should add a new workout', () => {
    service.addWorkout('Alice', 'Running', 30);
    const workouts = service.getWorkouts();
    expect(workouts.length).toBe(1);
    expect(workouts[0].name).toBe('Alice');
    expect(workouts[0].workouts).toContain('Running');
    expect(workouts[0].totalWorkoutMinutes).toBe(30);
  });

  it('should update existing user workouts', () => {
    service.addWorkout('Alice', 'Running', 30);
    service.addWorkout('Alice', 'Swimming', 45);
    const workouts = service.getWorkouts();
    expect(workouts.length).toBe(1);
    expect(workouts[0].numberOfWorkouts).toBe(2);
    expect(workouts[0].totalWorkoutMinutes).toBe(75);
  });

  it('should clear all workouts', () => {
    service.addWorkout('Alice', 'Running', 30);
    service.clearWorkouts();
    expect(service.getWorkouts().length).toBe(0);
  });
});
