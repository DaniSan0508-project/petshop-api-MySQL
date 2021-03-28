class Tabelas{
    init(connection){
        this.connection = connection
        this.criarAtendimento()
}
    criarAtendimento(){
        const sql = `CREATE TABLE Atendimentos 
        (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20) NOT NULL,
        servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, data datetime NOT NULL, 
        dataCriacao datetime NOT NULL PRIMARY KEY(id))`
       

        this.connection.query(sql,error=>{
            if(!error){
                console.log('tabelas criadas')
            }else{
                console.log('erro ao criar tabelas')
            }
        })
    }

}

module.exports = new Tabelas