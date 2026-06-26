import {prisma} from '../lib/prisma'
import express from 'express'
const app = express();
const port = 3000

app.use(express.json())
app.listen(port,()=>{
    console.log(`Servidor escuchando puerto: ${port}`)
})

app.get('/orders',async (req: any, res: any) =>{

    try{
        const orders = await prisma.orders.findMany({include: {filaments: true}})
        return res.status(200).send(orders)
    }catch(error:any){
        return res.send(error.message)
    }
    
})

