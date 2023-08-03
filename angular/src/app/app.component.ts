import { Component } from '@angular/core';
import { Feedback, FeedbackService } from './feedback.service';
import { MadComponent } from './mad/mad.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // madFeedbacks: string[];
  // sadFeedbacks: string[];
  // gladFeedbacks: string[];
  // madcomponent: MadComponent;
  madFeedbacks: Feedback[] = [];
  sadFeedbacks: Feedback[] = [];
  gladFeedbacks: Feedback[] = [];
  allFeedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {
    // this.madFeedbacks = this.feedbackService.getMadFeedbacks();
    // this.sadFeedbacks = this.feedbackService.getSadFeedbacks();
    // this.gladFeedbacks = this.feedbackService.getGladFeedbacks();
    // this.madcomponent = new MadComponent(this.feedbackService);
  }


  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  getAllFeedbacks(): void {
    this.feedbackService.getAllFeedbacks().subscribe(
      (feedbacks: Feedback[]) => {
        this.allFeedbacks = feedbacks;
        this.madFeedbacks = feedbacks.filter(f => f.type === 'mad');
        this.sadFeedbacks = feedbacks.filter(f => f.type === 'sad');
        this.gladFeedbacks = feedbacks.filter(f => f.type === 'glad');
      },
      (error) => {
        console.error('Error retrieving feedbacks:', error);
      }
    );
  }


  submitMad() {

  }
}
