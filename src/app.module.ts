import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ConfigModule } from '@nestjs/config';

export const { ObserveModule, ObserveInstrument } = createObserveModule();


@Module({
  
  imports: [
    ConfigModule.forRoot({
isGlobal: true,
}),
    ObserveModule.forRoot({
      serviceId: 'firstproject1',
    }),
    UsersModule,
  ],
  
  
})
export class AppModule {}
