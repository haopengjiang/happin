# Document

## Setup

1 Clone your fork of the repository

```sh
git clone https://github.com/haopengjiang/happin.git
```

2 Install npm dependencies

```sh
npm install
```

3 Start Application
```sh
$ npm install -g ts-node
$ ts-node bootstrap
```

4 API endpoints
- get all events: GET/ localhost:3000/event
- get events by artists: GET/ localhost:3000/event/artist/:artist example: localhost:3000/event/artist/langlang
- get events by host city: GET/ localhost:3000/event/city/:city example: localhost:3000/event/city/Beijing
- create new event: POST/ localhost:3000/event 
- example request body: {
    - "name": "flute",
    - "artist": "TTT",
    - "hostCity": "Vancouver"
- }

5 Run unit test

```sh
npm run test:all
```
