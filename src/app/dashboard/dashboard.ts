import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  courses: any[] = [];

  ngOnInit() {
    const saved = localStorage.getItem('coursesData');
    if (saved) {
      this.courses = JSON.parse(saved);
    } else {
      this.courses = [
        { id: 1, name: 'Angular Basics', progress: 30 },
        { id: 2, name: 'TypeScript Mastery', progress: 70 },
        { id: 3, name: 'Web Development', progress: 50 },
        { id: 4, name: 'PF', progress: 99 },
        { id: 5, name: 'OOP', progress: 4 }
      ];
      localStorage.setItem('coursesData', JSON.stringify(this.courses));
    }
  }

  getProgressColor(progress: number): string {
    if (progress < 40) return '#ef4444';
    if (progress < 75) return '#f59e0b'; 
    return '#10b981'; 
  }
}