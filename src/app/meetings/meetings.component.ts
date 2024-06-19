import { Component } from '@angular/core';
import { Meeting } from '../meeting';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
    
    submitted: boolean = false;
    
    model!: Meeting;

  constructor() {}

  ngOnInit(): void {
    // Simulating delayed initialization (e.g., after API call)
    setTimeout(() => {
      // Set initial values after the form is ready
      //this.model = new Meeting('test topic',-1, new Date, 'test@email.com' );// Replace with your actual initial value
      this.model = new Meeting('',1, new Date, '' );
    }, 1); // Adjust delay as needed
  }

 onSubmit(meetingForm: NgForm){
   this.submitted = true;
   console.log(this.model);

  this.model = new Meeting ('', -1, new Date, '');

  meetingForm.resetForm();  // Reset the form using ngForm directive method
  this.submitted = false; // Reset submitted flag
}

  newMeeting() {
    this.model = new Meeting ('',-1, new Date, '');
    this.submitted = false;
  }

}

