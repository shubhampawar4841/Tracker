import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface WorkoutData {
  name: string;
  workouts: string[];
  workoutMinutes: number[];
}

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-chart.component.html',  // Link to the separate HTML file

  styles: []
})
export class WorkoutChartComponent implements OnInit, OnDestroy {
  private chart: any;
  workoutData: WorkoutData[] = [];
  selectedUser: WorkoutData | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('Initializing WorkoutChartComponent...');
    this.loadChartData();
  }

  loadChartData() {
    try {
      const storedData = localStorage.getItem('workoutData');
      console.log('Loaded data from localStorage:', storedData);

      if (storedData) {
        this.workoutData = JSON.parse(storedData);
      } else {
        console.log('No workout data found in localStorage.');
      }
    } catch (error) {
      console.error('Error loading workout data:', error);
    }
  }

  selectUser(user: WorkoutData) {
    console.log('Selected user:', user);
    this.selectedUser = user;

    // Trigger change detection to ensure the DOM updates after the selection
    this.cdr.detectChanges();

    this.createChart(user);
  }

  createChart(user: WorkoutData) {
    const canvas = document.getElementById('workoutChart') as HTMLCanvasElement;
    if (!canvas) {
      console.log('Canvas element not found!');
      return;
    }

    if (this.chart) {
      console.log('Destroying existing chart...');
      this.chart.destroy();
    }

    console.log('Creating chart for:', user.name);

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: user.workouts,
        datasets: [
          {
            label: 'Minutes per Workout',
            data: user.workoutMinutes,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `${user.name}'s Workout Breakdown`
          },
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Minutes'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Workout Sessions'
            }
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      console.log('Destroying chart on component destroy...');
      this.chart.destroy();
    }
  }
}
