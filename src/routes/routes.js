
const express = require('express');
const mysql = require('../database');
const router = express.Router();


router.get('/contacts', (req,res) => {
    var phrase = req.query.phrase;

    if(phrase== null){
        mysql.query('SELECT * FROM contacts ORDER BY contacts.name, contacts.lastname', (error,results,fields) => {
            if(!error){
                res.status(200).json(results);
            }
            else{
                res.json({
                    status: "Error"
                })
                console.error(error);
            }
        
        });
    }else{
        if(!phrase){
            res.status(400).json();
        }else{
            mysql.query("SELECT * FROM contacts WHERE contacts.name REGEXP '[" + phrase + "]' ORDER BY contacts.name, contacts.lastname;", (error,results,fields) => {
                if(!error){
                    res.status(200).json(results);
                }
                else{
                    res.json({
                        status: "Error"
                    })
                    console.error(error);
                }
            
            });
        }
    }
});

router.get('/contacts/:id', (req,res) => {
    var id = req.params.id;

    if(!id){
        res.status(400).json();
    }else{
        mysql.query("SELECT * FROM contacts WHERE contacts.id =" + id, (error,results,fields) => {
            if(!error){
                if(results == ''){
                    res.status(404).json();
                }else{
                    res.status(200).json(results);
                }
            }
            else{
                res.json({
                    status: 'Error',
                    message: error.sqlMessage 
                })
            }
        });
    }
});

router.delete('/contacts/:id', (req,res) => {
    var id = req.params.id;
    
    if(!id){
        res.status(400).json();
    }else{
        mysql.query("DELETE FROM contacts WHERE contacts.id =" + id, (error,results,fields) => {
            if(!error){
                if(results.affectedRows == 0){
                    res.status(404).json();
                }else{
                    res.status(204).json();
                }
            }
            else{
                res.json({
                    status: 'Error',
                    message: error.sqlMessage 
                })
            }
        });
    }
});

module.exports = router;