import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css']
})
export class MovieInputComponent implements OnInit {

  //movies: any[] = [];
  @Output() newMovieAddEvent = new EventEmitter<[]>();
  constructor() { }

  genres = [
    { name: 'Action' },
    { name: 'Drama' },
    { name: 'Thriller' },
    { name: 'Horror' },
    { name: 'Comedy' }
  ];

  form = new FormGroup({
    //We can add Validator in this block
    movieName: new FormControl(''),
    directorName: new FormControl(''),
    productionBy: new FormControl(''),
    releaseYr: new FormControl(''),
    genre: new FormControl(''),
  });

  submit() {
    this.newMovieAddEvent.emit(this.form.value)
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
