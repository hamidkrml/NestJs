import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    OnApplicationShutdown
{
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
  onApplicationShutdown(signal?: string) {
    throw new Error('Method not implemented.');
  }

  onApplicationBootstrap() {
    console.log('onApllicationBootst');
  }
  onModuleInit() {
    console.log('Apservice baslatildi ');
  }
  getHello(): string {
    return 'Hello World!!!';
  }

  Gethii(): string {
    return 'GetHii!';
  }
}
