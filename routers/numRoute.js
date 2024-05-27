import express from "express";
import { numControl } from "../controller/numControll";

const numRouter = express.Router();

numRouter.get("/num",numControl)