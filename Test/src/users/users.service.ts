import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getuserbyId(id: number) {
    return { id, name: 'john' };
  }
}
