# Express-Exception

Express exception is an plug-and-play package for handling HTTP exceptions in your express application. It is very easy to install and use. It will provide you with next level of exceptions handling in a seamless way.

## Installation

Use the [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) to install express-exception.

```bash
npm install express-exception
```
or 
```bash
yarn add express-exception
```

## Usage

```javascript
import express from 'express';
import expressException from 'express-exception';

const app = express();

app.use(express.json());
//rest of your middlewares or routes

//set express-exception to handle your exceptions
expressException.setHandler(app);

app.listen(3000, ()=>{
console.log(`Application started on port ${3000}`);
}
```
## Example Implementation
```javascript
import express, { Request, Response } from 'express';
import ee, { CustomHttpException, InternalServerErrorException, NotFoundException } from 'express-exception';

const app = express();

app.use(express.json())

app.get('/', (_req: Request, _res: Response) => {
  //custom exception from 'express-exception'
  throw new CustomHttpException('Custom Error Message', 500)
})

app.get('/404', (_req: Request, _res: Response) => {
  //not found exception from 'express-exception'
  throw new NotFoundException()
})

app.get('/500', (_req: Request, _res: Response) => {
  //server error from 'express-exception'
  throw new InternalServerErrorException()
})

app.get('/other', (_req: Request, _res: Response) => {
  //some other Unhandled error that 'express-exception' will handle
  throw new Error('Some other Unhandled Error')
})

ee.setHandler(app)
app.listen(5000, () => {
  console.log('App started listening on port 5000')
})

```
