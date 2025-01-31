import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface WorkoutData {
  name: string;
  workouts: string[];
  workoutMinutes: number[];
  numberOfWorkouts: number;
  totalWorkoutMinutes: number;
}

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './workout-form.component.html',  // Link to the separate HTML file
})
export class WorkoutFormComponent implements OnInit {
  workoutForm: FormGroup;
  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  availableWorkoutTypes: string[] = [...this.workoutTypes];
  existingUsers: string[] = []; // Array to store existing usernames

  constructor(private fb: FormBuilder) {
    this.workoutForm = this.fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      minutes: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.loadExistingUsers();
    this.addInitialData();
  }

  loadExistingUsers() {
    const storedData = localStorage.getItem('workoutData');
    if (storedData) {
      const workouts: WorkoutData[] = JSON.parse(storedData);
      this.existingUsers = workouts.map((w: WorkoutData) => w.name);
    }
  }

  addInitialData() {
    const defaultUsers: WorkoutData[] = [
      {
        name: 'Alice',
        workouts: ['Running', 'Yoga', 'Cycling', 'Swimming'],
        workoutMinutes: [30, 45, 67, 21],
        numberOfWorkouts: 4,
        totalWorkoutMinutes: 163,  // Corrected to the sum of workoutMinutes
      },
      {
        name: 'Bob',
        workouts: ['Cycling', 'Swimming', 'Yoga', 'Running'],
        workoutMinutes: [40, 60, 30, 70],
        numberOfWorkouts: 4,
        totalWorkoutMinutes: 200,  // Corrected to the sum of workoutMinutes
      },
      {
        name: 'Charlie',
        workouts: ['Running', 'Cycling', 'Swimming', 'Yoga'],
        workoutMinutes: [35, 50, 64, 18],
        numberOfWorkouts: 4,
        totalWorkoutMinutes: 167,  // Corrected to the sum of workoutMinutes
      },
    ];
    

    if (!localStorage.getItem('workoutData')) {
      localStorage.setItem('workoutData', JSON.stringify(defaultUsers));
    }
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      const formData = this.workoutForm.value;
      const storedData = localStorage.getItem('workoutData');
      let workouts: WorkoutData[] = storedData ? JSON.parse(storedData) : [];

      const existingUserIndex = workouts.findIndex(
        (w: WorkoutData) => w.name.toLowerCase() === formData.userName.toLowerCase()
      );

      if (existingUserIndex !== -1) {
        workouts[existingUserIndex].workouts.push(formData.workoutType);
        workouts[existingUserIndex].workoutMinutes.push(Number(formData.minutes));
        workouts[existingUserIndex].numberOfWorkouts += 1;
        workouts[existingUserIndex].totalWorkoutMinutes += Number(formData.minutes);
      } else {
        workouts.push({
          name: formData.userName,
          workouts: [formData.workoutType],
          workoutMinutes: [Number(formData.minutes)],
          numberOfWorkouts: 1,
          totalWorkoutMinutes: Number(formData.minutes),
        });
      }

      localStorage.setItem('workoutData', JSON.stringify(workouts));
      this.updateAvailableWorkoutTypes(formData.userName);
      console.log('Updated Workouts Data:', workouts);
      this.workoutForm.reset();
      alert('Workout added successfully!');
    }
  }

  updateAvailableWorkoutTypes(userName: string) {
    const storedData = localStorage.getItem('workoutData');
    let workouts: WorkoutData[] = storedData ? JSON.parse(storedData) : [];

    const user = workouts.find((w: WorkoutData) => w.name.toLowerCase() === userName.toLowerCase());
    if (user) {
      const selectedWorkouts = user.workouts;
      this.availableWorkoutTypes = this.workoutTypes.filter(
        (type) => !selectedWorkouts.includes(type)
      );
    }
    window.location.reload();
  }
}
