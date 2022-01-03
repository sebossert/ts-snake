# ts-snake [WIP]
snake

for demonstrational and educational purposes

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