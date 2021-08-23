import { injectable } from 'inversify';

export interface IEvent {
  name: string;
  artist:string;
  hostCity: string;
}

@injectable()
export class EventService {

  private eventStorage: IEvent[] = [{
    name: 'musician',
    artist: 'langlang',
    hostCity: 'Beijing'
  }, {
    name: 'piano',
    artist: 'XXX',
    hostCity: 'Ottawa'
  }];

  public getEvents(): IEvent[] {
    return this.eventStorage;
  }

  public getEventByCity(city: string): IEvent {
    return this.eventStorage.find(event => event.hostCity === city);
  }

  public getEventByArtist(artist: string): IEvent {
    return this.eventStorage.find(event => event.artist === artist);
  }

  public newEvent(event: IEvent): IEvent {
    this.eventStorage.push(event);
    return event;
  }
}
