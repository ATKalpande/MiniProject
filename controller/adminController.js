import { connection } from "../utility/DButils.js";
import { compareSync,hashSync } from "bcrypt";

import jwt from "jsonwebtoken";


export const adminController= (req,res)=>{
            const{id,username,password,phone} = req.body;

            const encryptedPass= hashSync(password,10);
            
        
            // const qry = `insert into admin values(${id},'${username}','${password}','${phone}')`;

            const qry = `insert into admin values(${id},'${username}','${encryptedPass}','${phone}')`;


            connection.query(qry,(error,result)=>{
                if(error){
                    res.status(500).send({Message:'Something went wrong...!'});
                    console.log(error)
                }
                    else{
                        res.status(200).send({Message:'Admin Registerd.........!'});
                    }
                
            });
}


export const loginController=(req,res)=>{
        const{username,password} = req.body;
        const qry = `select * from admin where username='${username}'`;

        connection.query(qry,(error,result)=>{
            if(error){
                res.status(500).send({Message:'Something went wrong........!'});
                console.log(error)
            }
            else{
                if(result.length==0)
                    {
                        res.status(400).send({Message:'Invalid username'});
                    }
                    else{
                        const encryptPassword = result[0].password;
                        if(compareSync(password,encryptPassword))
                            {
                                const token = jwt.sign({adminId:result[0].id},'hello1234');

                            
                                res.status(200).send({Message:'Login Successfull',token:token})
                            }
                            else{
                                res.status(400).send({Message:'Invalid Password for the mentioned username'});
                            }
                    }
            }
        })
}