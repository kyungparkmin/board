import express from 'express';
const router = express.Router();

const data = (
  {
    title : "title1",
    content: "content1"
  }
)

const title = data.title;
const content = data.content;

router.get('/', (req, res) => {
  res.render('main', {
    title,
    content
  })
})

export default router;
