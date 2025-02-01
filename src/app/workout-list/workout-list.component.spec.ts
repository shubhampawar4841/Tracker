import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';
import { CommonModule } from '@angular/common';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutListComponent], // ✅ Import standalone component
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

  it('should initialize data when localStorage is empty', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');

    component.initializeData();

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(component.workouts.length).toBeGreaterThan(0);
  });

  it('should load workouts from localStorage', () => {
    const mockWorkouts = [
      { name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30 },
      { name: 'Bob', workouts: ['Swimming'], numberOfWorkouts: 1, totalWorkoutMinutes: 40 }
    ];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockWorkouts));

    component.loadWorkouts();

    expect(component.workouts.length).toBe(2);
    expect(component.workouts[0].name).toBe('Alice');
    expect(component.workouts[1].workouts).toContain('Swimming');
  });

  it('should handle localStorage parsing error gracefully', () => {
    spyOn(localStorage, 'getItem').and.throwError('Storage error');

    component.loadWorkouts();

    expect(component.workouts.length).toBe(0);
  });

  it('should filter workouts by search term', () => {
    component.workouts = [
      { name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30 },
      { name: 'Bob', workouts: ['Swimming'], numberOfWorkouts: 1, totalWorkoutMinutes: 40 }
    ];
    component.searchTerm = 'alice';
    component.applyFilters();

    expect(component.filteredWorkouts.length).toBe(1);
    expect(component.filteredWorkouts[0].name).toBe('Alice');
  });

  it('should filter workouts by selected workout type', () => {
    component.workouts = [
      { name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30 },
      { name: 'Bob', workouts: ['Swimming'], numberOfWorkouts: 1, totalWorkoutMinutes: 40 }
    ];
    component.selectedWorkoutType = 'Swimming';
    component.applyFilters();

    expect(component.filteredWorkouts.length).toBe(1);
    expect(component.filteredWorkouts[0].name).toBe('Bob');
  });

  it('should move to the next page correctly', () => {
    component.workouts = Array(10).fill({
      name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30
    });
    component.itemsPerPage = 5;
    component.currentPage = 1;

    component.nextPage();

    expect(component.currentPage).toBe(2);
  });

  it('should move to the previous page correctly', () => {
    component.currentPage = 2;

    component.previousPage();

    expect(component.currentPage).toBe(1);
  });

  it('should check if next page exists', () => {
    component.workouts = Array(10).fill({
      name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30
    });
    component.itemsPerPage = 5;
    component.currentPage = 1;

    expect(component.hasNextPage()).toBeTrue();
  });

  it('should return false when no next page exists', () => {
    component.workouts = Array(5).fill({
      name: 'Alice', workouts: ['Running'], numberOfWorkouts: 1, totalWorkoutMinutes: 30
    });
    component.itemsPerPage = 5;
    component.currentPage = 1;

    expect(component.hasNextPage()).toBeFalse();
  });

});
