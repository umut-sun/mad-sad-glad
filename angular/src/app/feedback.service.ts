import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  constructor(private http: HttpClient) { }

  private madFeedbacks: string[] = [];
  private sadFeedbacks: string[] = [];
  private gladFeedbacks: string[] = [];

  addMadFeedback(feedback: string): void {
    this.madFeedbacks.push(feedback);
  }

  addSadFeedback(feedback: string): void {
    this.sadFeedbacks.push(feedback);
  }

  addGladFeedback(feedback: string): void {
    this.gladFeedbacks.push(feedback);
  }

  getMadFeedbacks(): string[] {
    return this.madFeedbacks;
  }

  getSadFeedbacks(): string[] {
    return this.sadFeedbacks;
  }

  getGladFeedbacks(): string[] {
    return this.gladFeedbacks;
  }

  private apiUrl = 'http://localhost:5260/api/Feedback'; // .NET Core Web API adresi
  // private apiUrl = 'http://localhost:44383/api/Feedback'; // .NET Core Web API adresi

  getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  addFeedback(type: string, feedback: string): Observable<any> {
    const newFeedback = {
      type: type,
      text: feedback
    };

    return this.http.post(this.apiUrl, newFeedback);
  }
}

export class Feedback {
  id!: number;
  type!: string;
  text!: string;
}
