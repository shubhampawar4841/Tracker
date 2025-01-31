import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';
import { CommonModule } from '@angular/common';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutListComponent],
      imports: [CommonModule], // Make sure to import any modules that are part of your component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load workouts from localStorage', () => {
    // Mock the localStorage data
    const mockWorkouts = [
      {
        name: 'Alice',
        workouts: ['Running', 'Yoga'],
        numberOfWorkouts: 2,
        totalWorkoutMinutes: 60,
      },
      {
        name: 'Bob',
        workouts: ['Cycling', 'Swimming'],
        numberOfWorkouts: 2,
        totalWorkoutMinutes: 90,
      },
    ];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockWorkouts));

    // Call the method to load workouts
    component.loadWorkouts();

    // Ensure that the workouts are loaded properly
    expect(component.workouts.length).toBe(2);
    expect(component.workouts[0].name).toBe('Alice');
    expect(component.workouts[1].workouts).toContain('Cycling');
  });

  it('should handle loading error gracefully', () => {
    // Simulate an error when getting data from localStorage
    spyOn(localStorage, 'getItem').and.throwError('Error loading data');

    component.loadWorkouts();

    // Ensure the workouts array is empty in case of an error
    expect(component.workouts.length).toBe(0);
  });
});
