const express = require('express');
const DoctorData = require('../src/model/doctorData');
const doctorRouter = express.Router();

doctorRouter.post('/add',(req,res)=>{
    // res.header("Acess-Control-Allow-Orgin","*");
    // res.header("Acess-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    var doctor = {
        docName : req.body.doctor.docName,
        docDeg : req.body.doctor.docDeg,
        clinicName : req.body.doctor.clinicName,
        website : req.body.doctor.website,
        phone : req.body.doctor.phone,
        starRating : req.body.doctor.starRating,
        imageUrl : req.body.doctor.imageUrl,
    }
    var doctor = new DoctorData(doctor);
    doctor.save((err, docData)=>{
        if(err){
            console.log(err)
        } else{
            res.status(200).send(docData)
        }
    })
});

doctorRouter.get('/',(req,res)=>{
    // res.header("Acess-Control-Allow-Orgin","*");
    // res.header("Acess-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    DoctorData.find()
                .then((doctors)=>{
                    res.send(doctors);
                });
});

doctorRouter.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    DoctorData.findById(id)
    .then((doctor)=>{
        res.send(doctor);
    });
});

doctorRouter.post('/update/:id',(req,res)=>{
    const id = req.params.id;
    DoctorData.findById(id, (err,docData)=>{
        if(!docData){
            res.status(404).send("Record Not Found");
        }
        else{
            docData.docName = req.body.docName,
            docData.docDeg = req.body.docDeg,
            docData.clinicName = req.body.clinicName,
            docData.phone = req.body.phone,
            docData.website = req.body.website,
            docData.starRating = req.body.starRating,
            docData.imageUrl = req.body.imageUrl

            docData.save().then(docData =>{
                console.log(docData);
                // res.status(200).send('Update Complete');
            })
            .catch(err =>{
                res.status(400).send("Unable to Update the Database");
            });
        }
    });
});

doctorRouter.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    DoctorData.findByIdAndRemove({ _id: id}, (err, docData)=>{
        if(err){
            console.log(err)
        } else{
            res.status(200).send(docData)
        }
    });
});

module.exports = doctorRouter;