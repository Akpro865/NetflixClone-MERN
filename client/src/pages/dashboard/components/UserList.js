import profile from '../../../assets/ak.jpg'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { userRows } from './dummydb'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserList() {
  const [ data, setData ] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200, 
    renderCell: (params) => {
      return (
       <div className='flex items-center'>
        <img src={params.row.profile} alt='profile' className='h-10 w-10 mr-3 object-cover rounded-full'/>
        <span >{params.row.username}</span>
       </div>
      )
    }
   },
  { field: 'email', headerName: 'Email', width: 190 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
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
        <Link to={"/user/"+params.row.id}>
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

export default UserList
