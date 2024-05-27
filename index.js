import express from 'express';
import { connection } from './utility/DButils.js';
import { numControl } from './controller/numControll.js';
import stdRouters from './routers/stdRouters.js';
import adminRoutes from './routers/adminRoutes.js';
import cors from 'cors';


const PORT = 9800;

const app = express();
app.use(express.json())

app.use(cors());


app.use('/std',stdRouters);
app.use('/admin',adminRoutes);


app.use('/num',numControl)


app.listen(PORT,()=>{
    connection.connect((error)=>{
        if(error)
            {
                console.log("Error in DB Connection");
           console.log(error) 
            }
            else{
                console.log("Database connected !");

            }
    })
    console.log(`Server is running on ${PORT}`)
})