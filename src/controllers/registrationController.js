import express, { request, response } from "express";
import { body, validationResult } from 'express-validator';

import db from '../services/registrationService.js';

const router = express.Router();

router.post('/', [
    body('email').isEmail().withMessage('informe um email válido'),
    body('password').isLength({ min: 7, max: 12 }).withMessage('a senha deve conter entre 7 e 12 caracteres'),
], async (request, response) => {

    const { email, password, userName } = request.body;
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() });
    }

    try {
        await db.insertUser(email, password, userName);

        response.status(201).json({ message: 'Usuario cadastrado com sucesso' });
    } catch (err) {
        response.status(500).json({
            message:
                `Encontramos um erro: ${err}`
        })
    };

});

export default router;