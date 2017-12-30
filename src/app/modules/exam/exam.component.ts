import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Exam } from './exam';
import { NotificationService } from '../../services/notification/notification.service';
import { Notification } from '../../modules/notification/notification';
import { PusherService } from '../../app.service';

declare const Pusher: any;

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit, OnChanges {
  @Input() currentPatientId: any;
  @Input() isVisible: any;
  private examContent: String = '';
  private showForm: Boolean;

  constructor (
    private notificationService: NotificationService,
    private pusherService: PusherService
  ) {

  }

  ngOnInit() {
  }

  showExamForm() {
    this.showForm = true;
  }

  hideExamForm($event) {
    if ($event.target.id === 'exam__form')
      this.showForm = false;
  }

  addExam() {
    let notification = new Notification(this.examContent || ' ', null, true, false, this.currentPatientId, new Date(Date.now()), 'exam');

    this.notificationService.add(notification).subscribe(
      data => {
        this.examContent = '';
        this.showForm = false;
         
        this.pusherService.notificationChannel.bind('pusher:subscription_succeeded', function() {
          this.pusherService.notificationChannel.trigger('client-new-notification', notification);
        });
      },
      err => console.error(err)
    )
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
