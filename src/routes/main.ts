import express from 'express';
const router = express.Router();

import con from '../config/db';



router.get('/', (req, res) => {
  let sql = "SELECT * FROM content";
  con.query(sql, (err, rows, fields) => {
    if(err){
      console.error(err);
    }else{
      //let title = req.body.C_title;
      let i;
      let title = [];
      let content = [];
      for( i = 0; i < rows.length; i++){
        title.push(rows[i].C_title);
        content.push(rows[i].C_content)

      }
      res.render('main', {title, content})
      console.log(title, content)
      
    }
  })
})

export default router;
