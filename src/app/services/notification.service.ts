import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: string[];
  constructor() {
    this.notifications=[
      'Welcome to the app',
      'You have a new message',
      'Item added to cart',
      'Fuck Israel'
      
    ]
   }

   getNotification():Observable<string>{

    //return from(this.notifications);
    return new Observable<string>(observer=>{
      let count=0
     let notificationInterval= setInterval(() => {
        console.log('test');
        
        if (count===this.notifications.length){
          observer.complete()
        }
        if (this.notifications[count]==='')
          observer.error('notification is empty')
        
        observer.next(this.notifications[count])
        
        count++
      }, 2000);
      return {
        //called when there is error or compeleted 
        unsubscribe:()=>{
          clearInterval(notificationInterval)
        }
      }
    })

   }
}


