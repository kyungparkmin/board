import express from 'express';
const router = express.Router();

import con from '../config/db';


router.get('/:id', (req, res) => {
  let id = req.params.id;
  let sql = "select * from post where P_id=? ";
  con.query(sql, id, (err, rows, fields) => {
    if(err){
      console.error(err);
    }else{
      res.render('post', {rows})
      console.log(rows)
    }
  })
})

/* router.post('/comment', (req, res) => {
  let comment = req.body.comment;
  let sql = "insert into comment(C_comment) values (?)";
  con.query(sql, comment, (err, rows, results) => {
    if(err){
      console.error(err);
    }else{
      res.redirect('/post');
    }
  })
})
 */
export default router;
