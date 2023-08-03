import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-mad',
  templateUrl: './mad.component.html',
  styleUrls: ['./mad.component.scss']
})
export class MadComponent {

  madFeedback!: string;

  constructor(private feedbackService: FeedbackService) { }

  submitMad(): void {
    this.feedbackService.addFeedback('mad', this.madFeedback).subscribe(
      () => {
        console.log('Mad feedback submitted successfully.');
      },
      (error) => {
        console.error('Error submitting mad feedback:', error);
      }
    );
  }

}
