import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from "../../environments/environment";
import { FormData } from './home.model';

@Injectable()
export class HomeService {
	private serverApiUrl = environment.serverEndpoint;

  constructor(private http: HttpClient){
  }

  saveFile(data: File): Observable<any> {
    return this.http.post<any>(`${this.serverApiUrl}/saveFile`, (data));
  }
}
