import { Injectable, Injector } from '@angular/core';
import { Logger } from './logger.service';

@Injectable()

export class DateService {

  today: number = Date.now();

  constructor(private logger: Logger) {}

  getCurrentDate() {
    return this.today
  }

}