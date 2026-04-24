import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/filter-pipe';
import { SortPipe } from '../shared/sort-pipe';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, SortPipe],
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  searchText: string = '';
  newCourseName: string = '';
  newCourseProgress: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 2;

  ngOnInit() {
    const saved = localStorage.getItem('coursesData');
    if (saved) {
      this.courses = JSON.parse(saved);
    } else {
      this.courses = [
        { id: 1, name: 'Angular Basics', progress: 30 },
        { id: 2, name: 'TypeScript Mastery', progress: 70 },
        { id: 3, name: 'Web Development', progress: 50 }
      ];
    }
  }

  addNewCourse() {
    if(this.newCourseName) {
      const newCourse = {
        id: this.courses.length + 1,
        name: this.newCourseName,
        progress: this.newCourseProgress
      };
      
      this.courses = [...this.courses, newCourse];
      localStorage.setItem('coursesData', JSON.stringify(this.courses));
      
      this.newCourseName = '';
      this.newCourseProgress = 0;
    }
  }

  getPaginatedCourses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.courses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.courses.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}