import { Component, OnInit } from '@angular/core';
// import { FileUploader } from 'ng2-file-upload';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  
  file: File;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.homeService.saveFile(this.file)
        .subscribe((res: Response) => {
          console.log('file upload response');
        })
  }
  
  onFileChange(event) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }
}