import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from '../notification';

@Pipe({
  name: 'notificationFilter'
})
export class NotificationFilterPipe implements PipeTransform {

  transform(notifications: Array<Notification>,
            filterType: String,
            filterArchived: Boolean,
            filterFavorite: Boolean): any {
    let filteredNotifications = notifications;
    
    if (filterType)
      filteredNotifications = filteredNotifications.filter(data => data.type === filterType)
      
    if (filterFavorite)
      filteredNotifications = filteredNotifications.filter(data => data.isFavorite === filterFavorite)

    if (filterArchived)
      filteredNotifications = filteredNotifications.filter(data => data.isArchived === filterArchived)

    return filteredNotifications;
  }

}
