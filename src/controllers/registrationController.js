import express, { request, response } from "express";
import {body, validationResult} from 'express-validator';

import db from '../services/userService.js';

const router = express.Router();



export default router;