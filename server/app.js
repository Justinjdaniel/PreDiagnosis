const express = require('express');
const bodyParser = require('body-parser');
var app = new express();
const cors = require('cors');
const mongoose = require('mongoose');
const DBLink = 'mongodb+srv://User_Justin:User_Justin@justinj-6njuj.gcp.mongodb.net/PreDiagnosisDb?retryWrites=true&w=majority';
const port = 3000;

// connecting mongoose to Database
mongoose.connect(DBLink, (err)=>{
    if(err){
        console.error('Error! '+ err)
    } else{
        console.log('Connected to DataBase Successfully')
    }
});

// Routes are listed here
const userRouter = require('./routes/user');
const doctorRouter = require('./routes/doctor');
const adminRouter = require('./routes/admin');
const dataRouter = require('./routes/symptom');

app.use(cors());
app.use(bodyParser.json());

// Routing section 
app.use('/user',userRouter);
app.use('/doc',doctorRouter);
app.use('/admin',adminRouter);
app.use('/data',dataRouter);

app.listen(port, function(){
    console.log('Server running in localhost:'+ port);
});