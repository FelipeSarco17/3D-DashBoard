import React from 'react'
import Table from '../components/Table'
import Form from '../components/form/Form'
import Input from '../components/form/Input'
import Button from '../components/Button'
import Select from '../components/form/Select'

interface FilterValues {
  id: string,
  cliente: string,
  precio: string,
  estado: string,
  fecha: string,  
}

const filterSales = ()=>{

}

const Sales = () => {
  return (
    <>

      <div className='flex flex-col gap-4'>

        <div>
          <Form<FilterValues> onSubmit={filterSales} className='grid grid-cols-3 gap-4 grid-rows-2'>
              <Input type="number" name="Id" label="Id"/>
              <Input name="Cliente" label="Cliente"/>
              <Input type="date" name="Fecha" label="Fecha"/>
              <Input type="number" name="Total" label="Total"/>
              <Select name="Estado" label="Estado">
                <option value="">Todos</option>
                <option value="Entregado">Entregado</option>
                <option value="Pendiente">Pendiente</option>
              </Select>
              <Button color="primary">Filtrar</Button>
          </Form>
        </div>

        <Table headers={['Id', 'Cliente', 'Fecha', 'Total',"Estado"]} rows={[
        ['1', 'Ana Lopez', '04/09', '$12000','Entregado'],
        ['2', 'Juan Perez', '03/09', '$8200','Pendiente']]} />
      </div>

    </>
  )
}

export default Sales