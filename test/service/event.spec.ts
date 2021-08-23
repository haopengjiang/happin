import { expect } from 'chai';
import { EventService } from '../../service/event';

describe('EventService', () => {
  let service;

  beforeEach(() => {
    service = new EventService();
  });

  it('should get back all events', () => {
    expect(service.getEvents()).to.deep.equal(
      [{
        name: 'musician',
        artist: 'langlang',
        hostCity: 'Beijing'
        }, {
        name: 'piano',
        artist: 'XXX',
        hostCity: 'Ottawa'
      }]
    );
  });

  it('should give back the event by artist', () => {
    expect(service.getEventByArtist('langlang')).to.deep.equal({
        name: 'musician',
        artist: 'langlang',
        hostCity: 'Beijing'
    });
  });

  it('should give back the event by host city', () => {
    expect(service.getEventByCity('Beijing')).to.deep.equal({
        name: 'musician',
        artist: 'langlang',
        hostCity: 'Beijing'
    });
  });

  it('should add a new event', () => {
    expect(service.getEvents()).to.have.length(2);
    expect(service.newEvent({
          "name": "violin",
          "artist": "YYY",
          "hostCity": "Tokyo"
      })).to.deep.equal({
          "name": "violin",
          "artist": "YYY",
          "hostCity": "Tokyo"
      });
    expect(service.getEvents()).to.have.length(3);
  });
});
