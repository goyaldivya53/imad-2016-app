var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
'article-one':{
    Title:'Article-One|Divya Goyal',
    heading:'Article-One',
    date:'Sep 23 2016',
    content:`   <p>
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                  This is the content for my first article.This is the content for my first article.
                </p> ` 
},
 'article-two':{
     Title:'Article-Two|Divya Goyal',
    heading:'Article-Two',
    date:'Sep 23 2016',
    content:`   <p>
                  This is the content for my second article.This is the content for my second article.
                  This is the content for my second article.This is the content for my second article.
                  This is the content for my second article.This is the content for my second article.</p>
                  <p>
                  This is the content for my second article.This is the content for my second article.
                  This is the content for my second article.This is the content for my second article.
                  </p>
                  <p>
                  This is the content for my second article.This is the content for my second article.
                  This is the content for my second article.This is the content for my second article.
                  </p>` 
 },
 'article-three':{
     Title:'Article-Three|Divya Goyal',
    heading:'Article-Three',
    date:'Sep 23 2016',
    content:`   <p>
                  This is the content for my third article. This is the content for my third article.
                   This is the content for my third article.</p>
                   <p>
                    This is the content for my third article. This is the content for my third article.
                     This is the content for my third article. This is the content for my third article.</p>` 
 }
};
function createTemplate(data){
    
var title=data.Title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
            <html>
            <head>
              <title>${title}</title>
              <meta name="viewport" content="width=device-width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
              <div>
                <a href="/">Home</a>
              </div>
              <hr/>
              <h3>${heading}</h3>
              <div>
                ${date}
              </div>
              <div>
                ${content}
              </div>
              </div>
            </body>
            </html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

 var counter=0;
 app.get('/counter',function(req,res){
 counter=counter+1;
 res.send(counter.toString());
 });
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/circle.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'circle.css'));
});
app.get('/ui/p1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p1.png'));
});

app.get('/ui/cover.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cover.png'));
});

app.get('/ui/s1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's1.png'));
});

app.get('/ui/s2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's2.png'));
});

app.get('/ui/s3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's3.png'));
});

app.get('/ui/s4.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's4.png'));
});

 app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

 app.get('/ui/stars.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stars.js'));
});

app.get('/:articleName',function(req,res){
    //articleName=article-one
    //articles[articleName]={} content of aticle-one
    
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

 
 
 
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
