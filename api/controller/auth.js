import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { db } from "../connect.js";


const register = (req, res) => {
    const q = 'SELECT * FROM clients WHERE fullname = ?';

    db.query(q, [req.body.fullname], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

        const q = "INSERT INTO clients (`fullname`, `email`, `password`) VALUES(?)";
        const values = [req.body.fullname, req.body.email, hashedPassword];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created!");
        });



    });
};

const login = (req, res) => {
    const q = "SELECT * FROM clients WHERE email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json('User not found');

        const comparePassword = bcryptjs.compareSync(req.body.password, data[0].password);
        if (!comparePassword) return res.status(400).json("Wrong password");

        const token = jwt.sign(
            {
                id: data[0].id
            },
            process.env.SECRET_TOKEN
        );
        const { password, ...others } = data[0];

        res.cookie('AccessToken', token, {
            httpOny: true
        }).status(200).json(others);

    });
};

const logout = (req, res) => {
    res.clearCookie('AccessToken', {
        secure: true,
        sameSite: 'none'
    }).status(200).json("User left");
};



export { register, login, logout };