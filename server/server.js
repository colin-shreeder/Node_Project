var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');
const c = require ('./controller')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/leads', c.home);
// onclick form entry = request.body.key. If entry = key, response.send lead

app.get('/leads/id/:leadId', c.searchId);
app.get('/leads/name/:leadName', c.searchName);
app.get('/leads/phone/:leadPhone', c.searchPhone);
app.get('/leads/email/:leadEmail', c.searchEmail);
app.get('/leads/disposition/:leadDisposition', c.searchDisposition);
app.get('/leads/notes/:leadNotes', c.searchNotes);


app.put('/leads/:leadId', function (request,response){
    var newName = request.body.name;
    
    if (!newName || newName===""){
        response.status(500).send({error:"You must provide lead name"})
    } else {
        for (var x=0;x<leads.length;x++){
            var ld = leads[x];

            if (ld.id === request.params.leadId){
                leads[x].name=newName;
                break;
            }
        }
        response.send(leads);
    }
   
});

app.put('/leads/:leadId', function (request,response){
    var newPhone = request.body.phone;
    
    if (!newPhone || newPhone===""){
        response.status(500).send({error:"You must provide lead phone"})
    } else {
        for (var x=0;x<leads.length;x++){
            var ld = leads[x];

            if (ld.id === request.params.leadId){
                leads[x].phone=newPhone;
                break;
            }
        }
        response.send(leads);
    }
   
});

app.put('/leads/:leadId', function (request,response){
    var newEmail = request.body.email;
    
    if (!newEmail || newEmail===""){
        response.status(500).send({error:"You must provide lead Email"})
    } else {
        for (var x=0;x<leads.length;x++){
            var ld = leads[x];

            if (ld.id === request.params.leadId){
                leads[x].email=newEmail;
                break;
            }
        }
        response.send(leads);
    }
   
});

app.put('/leads/:leadId', function (request,response){
    var newDisposition = request.body.disposition;
    
    if (!newDisposition || newDisposition===""){
        response.status(500).send({error:"You must provide lead disposition"})
    } else {
        for (var x=0;x<leads.length;x++){
            var ld = leads[x];

            if (ld.id === request.params.leadId){
                leads[x].disposition=newDisposition;
                break;
            }
        }
        response.send(leads);
    }
   
});

app.put('/leads/:leadId', function (request,response){
    var newNotes = request.body.notes;
    
    if (!newNotes || newNotes===""){
        response.status(500).send({error:"You must provide lead notes"})
    } else {
        for (var x=0;x<leads.length;x++){
            var ld = leads[x];

            if (ld.id === request.params.leadId){
                leads[x].notes=newNotes;
                break;
            }
        }
        response.send(leads);
    }
   
});

app.post('/leads', function (request,response){
    var lead = request.body;
    if (!lead || lead.name==''){
        response.status(500).send({error:"Your lead must have a name."})
    } else {
        leads.push(lead);
        response.status(200).send(leads);
    }
});


app.listen (3015,function (){
    console.log("First API running on port 3015")
});