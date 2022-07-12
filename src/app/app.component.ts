import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'movies-app';
  
  @Input() moviesList : any[] = [];
  @Output() movies = new EventEmitter<any[]>();

  addMovie(newMovie: []){
    console.log(newMovie);
    this.moviesList.push(newMovie);
    console.log(this.moviesList);
    this.movies.emit(this.moviesList);
  }

}
