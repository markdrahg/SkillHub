const express = require('express');
const app = express();
const path = require('path');
// app.use(express.static('public'));

app.use('/', express.static(path.join(__dirname + '/public')));

app.use((req, res) => {
 res.status(404);
 res.send('<h1>SkillHub Eror 404: Page not Found</h1>');
})

app.listen(3000, () => {
 console.log("App on 3000");
})