import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.sass']
})
export class ContactusComponent implements OnInit {
customerdatas;
checkoutForm;



  constructor(private formBuilder: FormBuilder) {
 

this.checkoutForm = this.formBuilder.group({

	firstName: new FormControl('',Validators.required),
   lastName: new FormControl('',Validators.required),
   email:new FormControl('',Validators.email),
   message: new FormControl('',Validators.required)
   
   });
   }
  

  ngOnInit(): void {

  }

  onSubmit(){
  	if(this.checkoutForm.valid){
 // to take the values from the form you can select the property that have the formGroup and then just add .value
   var a = this.checkoutForm.value;
   console.table(a);
   window.alert('Your message has been sent, we will come back to you as soon as possible');
   this.checkoutForm.reset();
 } else
window.alert('Please fulfill all fields to submit a message and/or enter a valid mail adress');
}
}


