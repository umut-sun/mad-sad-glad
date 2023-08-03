import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-glad',
  templateUrl: './glad.component.html',
  styleUrls: ['./glad.component.scss']
})
export class GladComponent {

  constructor(private feedbackService: FeedbackService) {

  }
  gladFeedback: string = "";


  submitGlad() {
    this.feedbackService.addGladFeedback(this.gladFeedback);
    console.table(this.feedbackService.getGladFeedbacks());
  }


}
