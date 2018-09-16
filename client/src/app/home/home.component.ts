import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  
  file: File;
  inputString: string;
  inputNbr1: number;
  inputNbr2: number;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  charOnlyInputField(event: any) {
    const pattern = /[a-zA-Z]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  numOnlyInputField(event: any) {
    const pattern = /[0-9\s]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submit() {
    this.homeService.saveFile(this.file)
        .subscribe((res: Response) => {
          console.log('file upload response');
          alert('file uploaded successfully');
        })
  }
  
  onFileChange(event) {
    console.log(event.target.files[0]);
    this.file = event.target.files;
  }

  sendStr() {
    this.homeService.sendStr(this.inputString)
          .subscribe((res: Response) => {
            alert(`First non-repeatng char: ${res['result']}`);
          })
  }

  sendDataUrl() {
    let nbrs = {
      nbr1: this.inputNbr1,
      nbr2: this.inputNbr2
    }

    this.homeService.sendDataUrl(nbrs)
          .subscribe((res: Response) => {
            alert(`successfull read the params: ${res['result']}`);
          })
  }
}