/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { STATUS_CODES } = require('http');

const app = express();

const USERDATA = path.join(__dirname, 'userdata.json');
const SUTDENT_CALL = path.join(__dirname, 'student-call.json');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// A fake API token our server validates
const API_TOKEN = 'D6W69PRgCoDKgHZGJmRUNA';

const extractToken = (req) => (
  req.query.token
);

const authenticatedRoute = ((req, res, next) => {
  const token = extractToken(req);

  if (token) {
    if (token === API_TOKEN) {
      return next();
    } else {
      return res.status(403).json({
        success: false,
        error: 'Invalid token provided',
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      error: 'No token provided. Supply token as query param `token`',
    });
  }
});

// Make things more noticeable in the UI by introducing a fake delay
// to logins
const FAKE_DELAY = 500;
app.post('/login', (req, res) => {
  let logincheck = 0;
  fs.readFile(USERDATA, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    const userdata = JSON.parse(data);
    console.log(req)
    userdata.forEach(function (item, i){
      if(item['username'] == req.body.username && item['password'] == req.body.password){
        logincheck = 1;
      }
    })
    if(logincheck){
      setTimeout(() => (
        res.json({
          success: true,
          token: API_TOKEN
        })
      ), FAKE_DELAY);
        
      }
      else{
        setTimeout(() => (
          res.json({
            success: false,
          })
        ), FAKE_DELAY);
      }
  })
});

app.get('/call', authenticatedRoute, (req, res) => {
  fs.readFile(SUTDENT_CALL, (err, data) => {
      const list = JSON.parse(data);
      var today = new Date();
      let check = true;
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours()+'-'+today.getMinutes();
      const newlist = { 
        username: req.query.username, 
        time : date
      };

      list.forEach(function (item, i){
        if(item['username'] == req.query.username){
          check = false;
        }
      });

      if(check){
        list.push(newlist);
        fs.writeFile(SUTDENT_CALL, JSON.stringify(list,null,4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(list);
        });
      }
      else{
        res.setHeader('Cache-Control', 'no-cache');
        res.json(list);
      }
  })
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
