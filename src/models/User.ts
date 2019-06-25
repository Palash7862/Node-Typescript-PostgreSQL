import DBConnection from './../db/DBConnection';
export default class User extends  DBConnection {
    result:any;
    constructor() {
      super();
    }

    public async getUsers() { 
        let data = await this.pool.query('SELECT * FROM users ORDER BY id ASC')
        .then((results:any) => {
          return results.rows;
        });
       if(data){  
        return data; 
       }
    }
}