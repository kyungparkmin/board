import express from 'express';
const router = express.Router();

import con from '../config/db';

router.get('/', (req, res) => {
  res.render('write')
})

router.post('/', (req, res) => {
  let title:string = req.body.title;
  let content:string = req.body.content;
  let sql = "insert into content values(?, ?)";

  con.query(sql, [title, content], (error, results, rows) => {

  })
})

export default router;
