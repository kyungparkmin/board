import express from 'express';
const router = express.Router();

import con from '../config/db';


router.get('/', (req, res) => {
  let sql = "SELECT * FROM content ORDER BY C_id desc";
  con.query(sql, (err, rows, fields) => {
    if(err){
      console.error(err);
    }else{
      //let title = req.body.C_title;
      let i;
      let data:any = [];
      for( i = 0; i < rows.length; i++){
          data.push(rows[i]);
      }
      res.render('main', {data})
    }
  })
})
export default router;
