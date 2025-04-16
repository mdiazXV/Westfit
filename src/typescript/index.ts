console.log("hello");
console.log("I am actually JavaScript new changes");
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});