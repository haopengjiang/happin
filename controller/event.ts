import {
  controller, httpGet, httpPost
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { IEvent, EventService } from '../service/event';
import { Request } from 'express';
import TYPES from '../constant/types';

@controller('/event')
export class EventController {

  constructor(@inject(TYPES.EventService) private eventService: EventService) { }

  @httpGet('/')
  public getEvents(): IEvent[] {
    return this.eventService.getEvents();
  }

  @httpGet('/city/:city')
  public getEventByCity(request: Request): IEvent {
    return this.eventService.getEventByCity(request.params.city);
  }

  @httpGet('/artist/:artist')
  public getEventByArtist(request: Request): IEvent {
    return this.eventService.getEventByArtist(request.params.artist);
  }

  @httpPost('/')
  public newEvent(request: Request): IEvent {
    return this.eventService.newEvent(request.body);
  }
}
