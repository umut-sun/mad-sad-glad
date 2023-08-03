import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.scss']
})
export class SadComponent {
  
  constructor(private feedbackService: FeedbackService) {

  }

  sadFeedback: string="";

  submitSad() {
    this.feedbackService.addSadFeedback(this.sadFeedback);
    console.table(this.feedbackService.getSadFeedbacks());  
  }
}
