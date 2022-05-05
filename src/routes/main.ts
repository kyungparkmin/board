import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main', {
    title : 'Main Page',
    length : 5
  })
})

export default router;