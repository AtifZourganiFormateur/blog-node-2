const express = require('express');
const app = express();
const db = require('./src/db/db');
const Article = require('./src/models/Article');
const Comment = require('./src/models/Comment');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./src/routes/findAllArticles')(app, Article, Comment);
require('./src/routes/findByPkArticles')(app, Article, Comment);
require('./src/routes/destroyArticle')(app, Article, Comment)
require('./src/routes/destroyComment')(app, Comment);
require('./src/routes/createArticle')(app, Article);
require('./src/routes/createComment')(app, Comment, Article);
require('./src/routes/updateArticle')(app, Article);
require('./src/routes/updateComment')(app, Comment);

app.listen(3002, ()=>{
    console.log('le server se lance sur le prot 3002');
})
