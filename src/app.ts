import express from 'express';
import path from 'path';

const app = express();

import mainRouter from './routes/main';
import writeRouter from './routes/write';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', mainRouter);
app.use('/write', writeRouter);
app.use('/',express.static(path.join(__dirname, 'public')))



app.listen(3001, () => {
  console.log("listening on 3000");
})


