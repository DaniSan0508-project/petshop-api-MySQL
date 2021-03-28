const mySQL = require('../config/connection')
const moment = require('moment')

module.exports = app =>{

    app.get('/atendimentos',(req,res)=>{
        let sql = `SELECT * FROM Atendimentos `
        mySQL.query(sql,(error,result)=>{
            if(error){
                res.status(400).json({err:'erro'})
            }else{
                res.status(200).json(result)
            }
        })
    })

    app.get('/atendimentos/:id',(req,res)=>{
        let id =parseInt(req.params.id)
        let sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        mySQL.query(sql,(error,result)=>{
            if(error){
                res.status(400).json({err:'erro'})
            }else{
                res.status(200).json(result)
            }
        })
    })

    app.post('/atendimentos',(req,res)=>{
        let atendimento = req.body
        let dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        let data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        let atendimentoDatado = {...atendimento,dataCriacao,data}
        let sql = `INSERT INTO Atendimentos SET? `
        mySQL.query(sql,atendimentoDatado,(error,result)=>{
            if(error){
                res.status(400).json({err:'erro ao cadastrar'})
            }else{
                res.status(201).json({status:'atendimento cadastrado'})
            }
        })
    });

    //patch para informações parciais
    app.patch('/atendimentos/:id',(req,res)=>{
        let atendimentos = req.body
        let id = parseInt(req.params.id)
        let sql = `UPDATE Atendimentos SET? WHERE id=?`
        mySQL.query(sql,[atendimentos,id],(error,result)=>{
            if(error){
                res.status(400).json({err:'erro'})
            }else{
                res.status(200).json(result)
            }
        })
    })

    app.delete('/atendimentos/:id',(req,res)=>{
        let id = parseInt(req.params.id)
        let sql = `DELETE FROM Atendimentos WHERE id=${id}`
        mySQL.query(sql,(error,result)=>{
            if(error){
                res.status(400).json({err:'erro'})
            }else{
                res.status(200).json(result)
            }
        })
    })

}