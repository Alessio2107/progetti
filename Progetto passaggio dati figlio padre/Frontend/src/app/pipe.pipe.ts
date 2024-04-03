import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(users: any[], ...args: any[]): any[] {
    if (!users) {
      return [];
    }
    return users.filter(user => user.age >= 18);
  }

}
