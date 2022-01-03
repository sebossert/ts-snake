# ts-snake [WIP]
snake

for demonstrational and educational purposes

## TODO

- create external lib
- improve module handling (move away from es5, requirejs)
- add further tests (canvas?)

## run

### local
```
npm run build-n-serve
```

## docker
```
docker run -p 8080:80 snake
```

## test

### local
```
npm run test
```

## docker
TODO

```
COPY test ./
COPY jest.config.js ./
RUN npm test
```