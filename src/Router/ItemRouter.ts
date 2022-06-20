import express, {Request, Response} from 'express'
import { findAll, findById, updateItem , addItem, deleteItem} from '../Services/ItemService'
export const route = express.Router()
route.get('/', async(req:Request, res:Response)=>{
        const result = await findAll()
        console.log(result)
        res.status(200).json(result) 
})
route.get('/:id', async(req:Request, res:Response)=>{
    let id: number = Number(req.params.id)
    try{

        const result = await findById(id)
        res.status(200).json(result) 
    }catch(err){
            res.status(404).json({"message":err})
    }
})
route.post('/', async(req:Request, res:Response)=>{
        const newItems = {
            id: Number(req.body.id),
            title: req.body.title,
            body: req.body.body
        }
        try{

            const result = await addItem(newItems)
            res.status(200).json(result)
        }catch(err){
            res.json('err')
        }

})

route.put('/:id', async (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    let updatedData = req.body
    console.log(req.body)
    try{
        const result = await  updateItem(id, updatedData)
        res.status(200).json(result)
    }catch(err){
        res.json(err)
    }
})
route.delete('/:id', (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    const result = deleteItem(id)
    res.status(200).json({message: "Item Deleted Successfully", data: result})
})