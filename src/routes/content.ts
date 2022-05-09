import express from 'express';
const router = express.Router();

import con from '../config/db';

router.get(`/:id`, (req, res) => {
  let sql = "select * from content";
  con.query(sql, (err, rows, fields) => {
    if(err){
      console.error(err);
    }else{
      res.render('content', {rows})
    }
  })
})

export default router;
