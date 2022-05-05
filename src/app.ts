import express from 'express';
import path from 'path';

const app = express();

import mainRouter from './routes/main';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);



app.listen(3000, () => {
  console.log("listening on 3000");
})


