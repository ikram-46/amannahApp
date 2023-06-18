import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
export interface Food {
   value: string;
   display: string;
}

@Component({
  selector: 'app-contract-eo',
  templateUrl: './contract-eo.component.html',
  styleUrls: ['./contract-eo.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class ContractEOComponent {
  defaultLanguage: String="ar";
  name:any="";
  step=false;
  Next(){
    this.step=true;
  }
   title = 'materialApp';   
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   constructor(private _formBuilder: FormBuilder) {}
   ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
         firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
         secondCtrl: ['', Validators.required]
      });
   }
}