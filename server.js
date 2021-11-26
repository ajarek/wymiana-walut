import express from 'express'
const port = 3000

const app = express()
import router from './routes/index.js';
app.set('view engine', 'ejs')
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('server started port:' + port)
})