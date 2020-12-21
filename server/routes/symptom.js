const express = require('express');
const SymData = require('../src/model/symptomData');
const dataRouter = express.Router();

dataRouter.post('/add',(req,res)=>{
    var sympiData = {
        sympiAt : req.body.symptomData.sympiAt,
        symptom : req.body.symptomData.symptom,
        cause : req.body.symptomData.cause,
        recom : req.body.symptomData.recom,
        suggWeb : req.body.symptomData.suggWeb
    }
    var sData = new SymData(sympiData);
    sData.save((err, syData)=>{
        if(err){
            console.log(err);
        } else{
            res.status(200).send(syData);
        }
    })
});

dataRouter.get('/',(req,res)=>{
    SymData.find()
                .then((sDatas)=>{
                    res.send(sDatas);
                });
});

dataRouter.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    SymData.findById(id)
    .then((sData)=>{
        res.send(sData);
    });
});

dataRouter.post('/update/:id',(req,res)=>{
    const id = req.params.id;
    SymData.findById(id, (err,syData)=>{
        if(!syData){
            res.status(404).send("Record Not Found");
        }
        else{
            syData.sympiAt = req.body.sympiAt,
            syData.symptom = req.body.symptom,
            syData.cause = req.body.cause,
            syData.recom = req.body.recom,
            syData.suggWeb = req.body.suggWeb

            syData.save().then(syData =>{
                console.log(syData);
                // res.status(200).send('Update Complete');
            })
            .catch(err =>{
                res.status(400).send("Unable to Update the Database");
            });
        }
    });
});

dataRouter.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    SymData.findByIdAndRemove({ _id: id}, (err, syData)=>{
        if(err){
            console.log(err);
        } else{
            res.status(200).send(syData);
        }
    });
});

dataRouter.post('/check',(req,res)=>{
    var checkData = {
        sympiAt : req.body.sympiAt,
        symptom : req.body.symptom
    }
    SymData.findOne(checkData)
    .then((cData)=>{
        res.send(cData);
    });
});

module.exports = dataRouter;