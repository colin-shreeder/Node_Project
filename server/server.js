var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');
const c = require ('./controller')

// The best video for instructions on this... https://scotch.io/courses/build-a-restful-nodejs-api/post-put-delete-requests

var leads = [
    {
        "id":"8ahf0",
        "name":"Chris Kringle",
        "phone": "435-989-0142",
        "email":"chris@kringlenet.com",
        "disposition":"not interested",
        "notes":"not impressed by our service"
    },
    {
        "id":"8ahf1",
        "name":"John Jangles",
        "phone": "435-931-0442",
        "email":"john@msn.com",
        "disposition":"pending",
        "notes":"wanted to think about it"
    }
]


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/leads', c.home);
app.post('/leads', c.add);
app.put('/leads/:Id', c.update);
app.delete('/leads/:Id',c.delete);


app.get('/leads/id/:leadId', c.searchId);
app.get('/leads/name/:leadName', c.searchName);
app.get('/leads/phone/:leadPhone', c.searchPhone);
app.get('/leads/email/:leadEmail', c.searchEmail);
app.get('/leads/disposition/:leadDisposition', c.searchDisposition);
app.get('/leads/notes/:leadNotes', c.searchNotes);












app.listen (3017,function (){
    console.log("First API running on port 3017")
});