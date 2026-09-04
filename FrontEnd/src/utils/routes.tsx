import Menu from '../views/Menu'
import Home from '../views/Home'
import Sales from '../views/Sales'

const routes = [
    {
        path: '/',
        Component: Menu,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'sales',
                Component: Sales
            }
        ]
    },
    
]


export default routes