import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ISong } from "../Models/song";

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<ISong[]> {
    return this.http.get<ISong[]>('http://localhost:3000/music')
  }
}
