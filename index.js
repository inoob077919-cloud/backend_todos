import express from 'express';
const app = express();
import { resolve } from "path"

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('<h1>This is server routes </h1>');
    console.log('this is route /');
});

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})