
import express from 'express';
import { studentData,saveStd, fetchbyId, removeStd, updateStudent, fetchbyRoll } from '../controller/studentControl.js';
import { verifyToken } from '../controller/middleware/verifyToken.js';

const stdRouters = express.Router();

stdRouters.get('/',/*verifyToken,*/studentData);

stdRouters.post('/',/*verifyToken,*/saveStd);

stdRouters.get('/:id',/*verifyToken,*/fetchbyId)
stdRouters.get('/rollno/:rollno',/*verifyToken,*/fetchbyRoll)

stdRouters.delete('/:id'/*verifyToken,*/,removeStd);

stdRouters.put('/:id',/*verifyToken,*/updateStudent)



export default stdRouters;