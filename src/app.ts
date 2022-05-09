import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

import mainRouter from './routes/main';
import writeRouter from './routes/write';
import postRouter from './routes/post';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', mainRouter);
app.use('/write', writeRouter);
app.use('/post', postRouter);

app.listen(3001, () => {
  console.log("listening on 3000");
})


