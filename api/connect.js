import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JeDoisLeFaire@1970',
    database: 'afrik'
});

db.connect(err => {
    if (err) throw err;
    console.log("Afrik Database connected");
});