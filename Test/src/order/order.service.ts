import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrderService {
  constructor(private readonly usersService: UsersService) {}

  getorderDetails(userId: number) {
    const user = this.usersService.getuserbyId(userId);
    console.log('user', user);
  }
}
