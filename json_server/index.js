var express = require('express'),
    bodyParser = require('body-parser')

    var app = express();
    var port = 4500;


    let data = {
        employees:[
            { 'key': 1, 'name': 'Vijay', 'title': 'CEO' },
            { 'key': 2, 'name': 'Arsath', 'title': 'Staff DIR', 'parent': 1 },
            { 'key': 3, 'name': 'Nandini', 'title': 'Finance DIR', 'parent': 4 },
            { 'key': 4, 'name': 'Aswinth', 'title': 'Advisory Board', 'parent': 1 },
            { 'key': 5, 'name': 'Chandhu', 'title': 'Tech Mgr', 'parent': 2 },
            { 'key': 6, 'name': 'Janani', 'title': 'Comunication DIR', 'parent': 4 },
            { 'key': 7, 'name': 'Vinay', 'title': 'Finace Specialist', 'parent': 3 },
            { 'key': 8, 'name': 'stephan', 'title': 'Senior Mgr', 'parent': 5 },
            { 'key': 9, 'name': 'Ragul', 'title': 'Comms specialist', 'parent': 6 },
            { 'key': 10, 'name': 'Jana', 'title': 'HR Mgr', 'parent': 2 },
            { 'key': 11, 'name': 'Mohamed', 'title': 'Assistant Mgr', 'parent': 5 },
            { 'key': 12, 'name': 'Mariya', 'title': 'Senior Mgr', 'parent': 10 },
            { 'key': 13, 'name': 'Arun', 'title': 'Assistant Mgr', 'parent': 10 },
            { 'key': 14, 'name': 'Sumathi', 'title': 'Staff', 'parent': 10 },
            { 'key': 15, 'name': 'Rajan', 'title': 'Staff', 'parent': 5 },
            { 'key': 16, 'name': 'Vikram', 'title': 'Fundraising Specialist', 'parent': 3 }
          ]
    }

 
    app.use(function (req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.json());

    app.post('/change',(req,res)=>{
        
        res.status(200).json(data)
    })

    app.post('/', (req, res) => res.json(data))

    
app.listen(port, function() {console.log('Server started at http://localhost:'+port+'/');});