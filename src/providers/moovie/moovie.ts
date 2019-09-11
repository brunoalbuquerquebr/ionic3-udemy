import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=427d99f64b7e109bd5a437e089b0d317`)
  }

  getMovieDetalhes(filmeId) {
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=427d99f64b7e109bd5a437e089b0d317`)
  }

}
