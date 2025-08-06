import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[UsersModule],
  providers: [OrderService],
})
export class OrderModule {}
