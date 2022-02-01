const express = require('express')
const app = express();
const port = 80 ;
const path = require('path');
let static = path.join(__dirname, 'public')
 console.log(static)

  app.use(express.static(path.join(__dirname, 'public')));
 
 app.get('/',  (req, res) => {
    

  })
  
  app.listen(port, () => {
      console.log("The App Started Successfully");
  });