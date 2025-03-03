import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { not } from 'rxjs/internal/util/not';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(private _notificationService: NotificationService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    //  this._notificationService.getNotification().subscribe((notification)=>{
    //     console.log(notification)
    this.subscription = this._notificationService
      .getNotification()
      .pipe(map((msg) => `${msg} senwar`),filter(msg=>msg.startsWith('W')))
      .subscribe({
        next: (notification) => {
          console.log(notification);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('completed');
        },
      });
  }
}
