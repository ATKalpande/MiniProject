import { createConnection } from "mysql";

export const connection = createConnection(
    {
        host:'localhost',
        user:'root',
        password:'password',
        database:'school',
    //    student_table_name:'student'

        // authPlugin: 'mysql_native_password'
    
    }
);