import express from 'express';
const router = express.Router();

import con from '../config/db';

router.get('/', (req, res) => {
  res.render('write')
})

router.post('/post', (req, res) => {
  let title:string = req.body.title;
  let content:string = req.body.content;
  let sql = "insert into post(P_title, P_content) values(?, ?)";
  let params = [title, content];

  con.query(sql, params, (err, results, rows) => {
    if(err){
      console.error(err);
    }else{
      res.redirect('/');
    }
  })
})

export default router;
