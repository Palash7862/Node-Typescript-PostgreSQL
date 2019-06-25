import DBConnection from './../db/DBConnection';
export default class User extends  DBConnection {
    result:any;
    constructor() {
      super();
    }

    public getUsers() { 
        let datax =   this.pool.query('SELECT * FROM users ORDER BY id ASC').then((results:any) => {
          // if (error) {
          //   throw error;
          // }
          console.log(results.rows);
          this.result = results.rows;
          return results.rows;
        });
        console.log(datax); 
    }
}