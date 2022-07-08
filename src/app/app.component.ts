import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  movies: any[] = [];

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
    console.log(JSON.stringify(this.form.value));
    this.movies.push(this.form.value);
    this.form.reset();
  }
}
