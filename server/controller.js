let books = [];

let id = 0;

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

module.exports={
    home: (req,res)=>{
        res.send(leads);
    },

    searchId: (req,res)=>{
        var search = req.body;
        
        if (!search || search===""){
            res.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.id.includes(req.params.leadId)){
                    res.send(ld);
                }
            }
            
        }
       
    },

    searchName: (request, response)=>{
        var search = request.body;
        
        if (!search || search===""){
            response.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.name.includes(request.params.leadName)){
                    response.send(ld);
                }
            }
            
        }
       
    },

    searchPhone: (request,response)=>{
        var search = request.body;
        
        if (!search || search===""){
            response.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.phone.includes(request.params.leadPhone)){
                    response.send(ld);
                }
            }
            
        }
       
    },

    searchEmail: (request,response)=>{
        var search = request.body;
        
        if (!search || search===""){
            response.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.email.includes(request.params.leadEmail)){
                    response.send(ld);
                }
            }
            
        }
       
    },

    searchDisposition: (request,response)=>{
        var search = request.body;
        
        if (!search || search===""){
            response.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.disposition.includes(request.params.leadDisposition)){
                    response.send(ld);
                }
            }
            
        }
       
    },

    searchNotes: (request,response)=>{
        var search = request.body;
        
        if (!search || search===""){
            response.status(500).send({error:"You must enter text into search query"})
        } else {
            for (var x=0;x<leads.length;x++){
                var ld = leads[x];
    
                if (ld.notes.includes(request.params.leadNotes)){
                    response.send(ld);
                }
            }
            
        }
       
    }
};