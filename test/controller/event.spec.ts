import { expect } from 'chai';
import { EventController } from '../../controller/event';
import { EventService } from '../../service/event';

describe('EventController', () => {
  let controller;

  beforeEach(() => {
    controller = new EventController(new EventService());
  });

  it('should get back all events', () => {
    expect(controller.getEvents()).to.deep.equal(
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
    expect(controller.getEventByArtist({
      params: {
        artist: 'langlang'
      }
      })).to.deep.equal({
        name: 'musician',
        artist: 'langlang',
        hostCity: 'Beijing'
      });
  });

  it('should give back the event by host city', () => {
    expect(controller.getEventByCity({
      params: {
        city: 'Beijing'
      }
      })).to.deep.equal({
        name: 'musician',
        artist: 'langlang',
        hostCity: 'Beijing'
      });
  });

  it('should add a new event', () => {
    expect(controller.getEvents()).to.have.length(2);
    expect(controller.newEvent({
      body: {
          "name": "violin",
          "artist": "YYY",
          "hostCity": "Tokyo"
      }
      })).to.deep.equal({
          "name": "violin",
          "artist": "YYY",
          "hostCity": "Tokyo"
      });
      expect(controller.getEvents()).to.have.length(3);
  });
});
