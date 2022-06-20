import express ,{Express, Request, Response} from 'express'
import {route} from './Router/ItemRouter';
import bodyParser from 'body-parser';
const PORT = 8080
const app: Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/items', route)



app.listen(PORT, ()=>{
    console.log('App running @'+ PORT)
})

