import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
    const { TokenA, TokenB, Platform, Value, AutoRebalance } = req.body;
    const cmd = `tableland write "INSERT INTO bwise_11155111_200 (TokenA, TokenB, Platform, Value, AutoRebalance) VALUES ('${TokenA}', '${TokenB}', '${Platform}', ${Value}, ${AutoRebalance});"`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            return res.status(500).json({ error: stderr });
        }
        res.status(201).json({ message: "Data added successfully!", result: stdout });
    });
});

app.get('/read', (req, res) => {
    const cmd = `tableland read "SELECT * FROM bwise_11155111_200;"`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            return res.status(500).json({ error: stderr });
        }
        res.json(JSON.parse(stdout));  
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
