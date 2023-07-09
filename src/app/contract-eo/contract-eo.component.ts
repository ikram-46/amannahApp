import { Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepper} from '@angular/material/stepper';
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
  @ViewChild(MatStepper) stepper!: MatStepper;
  defaultLanguage: String="ar";
  name:any="";
  step=false;
  Next(){
    this.step=true;
  }
   title = 'materialApp';   
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   fields: { label: string, value: string, isRequired: boolean }[] = [];
   constructor(private _formBuilder: FormBuilder) {
    // Initialize the fields array with empty values
    this.fields = [
      { label: 'اللقب', value: '', isRequired:true },
      { label: 'اللقب', value: '', isRequired:true },
      { label: 'اللقب', value: '', isRequired:true },
      { label: 'اللقب', value: '', isRequired: false},
      { label: 'اللقب', value: '', isRequired:false },
      { label: 'اللقب', value: '', isRequired:false },
    ];
   }
   ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
         firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
         secondCtrl: ['', Validators.required]
      });
   }

   currentStepIndex: number = 0;

   navigateToStep(index: number) {
     this.currentStepIndex = index;
   }
   navigateToFirstStep() {
    this.currentStepIndex = 0;
    this.stepper.selectedIndex = this.currentStepIndex;
    /* this.stepper.reset(); */
  }

  clearInput(index: number): void {
    this.fields[index].value = '';
  }

  
}