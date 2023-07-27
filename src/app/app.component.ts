import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  integerPattern = /^\d+$/;
  emailRegx = "(^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$";
  title = 'REACTIVEFORMS';


  // this FormGroup constructor takes javascript object as its arguments

  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl(""),
    age: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    countries: new FormControl(),
    gender: new FormControl()
  });

  // getControl(name: any) AbstractControl | null {
  //   return this.form.get(name);
  // }
  submitFun() {
    console.log(this.form.value);

  }

  getControl(name: any): AbstractControl | null {
    return this.form.get('name');
  }

}


