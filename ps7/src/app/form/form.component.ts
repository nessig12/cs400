import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup(
    {
      name:       new FormControl('', [Validators.required, Validators.minLength(2)]),
    }
  );

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Sending ${this.form.value.name}`);
  }

}
