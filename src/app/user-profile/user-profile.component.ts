import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userprofile = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    }),
  });
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log(value);
  }

}
