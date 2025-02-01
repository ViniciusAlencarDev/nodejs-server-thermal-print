import express from 'express';
import print from './print.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(express.json())

const port = Number(process.env.PORT) || 3030;
app.listen(port, () => console.log(`Server started in port ${port}`))

app.post('/print', (req, res) => {
    const text = req.body?.text;

    print(text);

    return res.send('Print command received successfully');
})
