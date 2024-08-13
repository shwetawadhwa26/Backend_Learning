const express = require('express');
const router = express.Router();
let items = [];

//create
router.post('/items',(req,res)=>{
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

//read 
router.get('/items',(req,res)=>{
    res.status(200).json(items);
})


//updating 
router.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  items = items.map(item => (item.id == id ? updatedItem : item));
  res.status(200).json(updatedItem);
});

//deletion
router.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== id);
  res.status(204).end();
});

module.exports.storeRouter = router;