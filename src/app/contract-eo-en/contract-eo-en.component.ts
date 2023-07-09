import { Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-contract-eo-en',
  templateUrl: './contract-eo-en.component.html',
  styleUrls: ['./contract-eo-en.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class ContractEOEnComponent {

  @ViewChild(MatStepper) stepper!: MatStepper;
  defaultLanguage: String="en";
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
      { label: 'User Name', value: '', isRequired:true },
      { label: 'User Name', value: '', isRequired:true },
      { label: 'User Name', value: '', isRequired:true },
      { label: 'User Name', value: '', isRequired: false},
      { label: 'User Name', value: '', isRequired:false },
      { label: 'User Name', value: '', isRequired:false },
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

  inputValue: string = '';

  clearInput(index: number): void {
    this.fields[index].value = '';
  }
}
