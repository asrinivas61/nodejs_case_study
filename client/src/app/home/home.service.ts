import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from "../../environments/environment";

@Injectable()
export class HomeService {
	private serverApiUrl = environment.serverEndpoint;

  constructor(private http: HttpClient){
  }

  saveFile(fileList: any): Observable<any> {
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('fileUpload', file, file.name);
      console.log(formData);
      return this.http.post<any>(`${this.serverApiUrl}/saveFile`, (formData));
    }
  }
}
