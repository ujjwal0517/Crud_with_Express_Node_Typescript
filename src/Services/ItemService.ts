import {mockItems} from '../Mock/mockItems'
import {Items} from '../Contracts/Items'
export const findAll = ()=>{
    return Promise.resolve(mockItems)
}
export const findById = (id: number)=>{
    const item= mockItems.find((items)=>items.id === id)
    if(item){

        return Promise.resolve(item)
    }else{
        return Promise.reject()
    }
}
export const addItem = (item: Items)=>{
    mockItems.push(item)
    return Promise.resolve(mockItems)
}
export const updateItem = (id: number, item:Items)=>{
    const itemById = mockItems.find((gajabKoItem)=>gajabKoItem.id ===id) 
    if(itemById){
        itemById.id = item.id ;
        itemById.title = item.title;
        itemById.body = item.body;
        return Promise.resolve(itemById)
    }else{
        return Promise.reject()
    }
}
export const deleteItem = (id:number)=>{
    const itemToDelete = mockItems.filter(item=>item.id!=id)
    return Promise.resolve(mockItems)
}
