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

