import profile from '../../../assets/ak.jpg'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { productRows } from './dummydb'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProductList() {
  const [ data, setData ] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'product', headerName: 'Product', width: 200, 
    renderCell: (params) => {
      return (
       <div className='flex items-center'>
        <img src={params.row.img} alt='profile' className='h-10 w-10 mr-3 object-cover rounded-full'/>
        <span >{params.row.productname}</span>
       </div>
      )
    }
   },
  { field: 'stock', headerName: 'Stock', width: 190 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 160,
    renderCell: (params) => {
      return (
        <div>
        <Link to={"/product/"+params.row.id}>
         <button className='bg-green-500 text-white rounded mr-3 p-1'>Edit</button>
        </Link>
        <DeleteIcon className='text-red-600 cursor-pointer' onClick={() => handleDelete(params.row.id)}/>
        </div>
      )
    }
  },
];

  return (
     <div className='basis-4/5 mx-3'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    
  )
}

export default ProductList
