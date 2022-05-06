import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();

import mainRouter from './routes/main';
import writeRouter from './routes/write';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.use('/', mainRouter);
app.use('/write', writeRouter);

app.listen(3001, () => {
  console.log("listening on 3000");
})


