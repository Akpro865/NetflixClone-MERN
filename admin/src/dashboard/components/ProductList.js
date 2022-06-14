import profile from '../assets/ak.jpg'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { productRows } from './dummydb'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovies, deleteMovie } from '../features/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

function ProductList() {

  const dispatch = useDispatch()
  const { movie } = useSelector((state) => state.movie)
  const { user } = useSelector(state => state.auth)
  
  useEffect(() => {
    dispatch(getMovies(user))
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteMovie())
  }

  const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 130 },
  { field: 'movie', headerName: 'Movie', width: 300, 
    renderCell: (params) => {
      return (
       <div className='flex items-center'>
        <img src={params.row.img} alt='profile' className='h-10 w-10 mr-3 object-cover rounded-full'/>
        <span >{params.row.title}</span>
       </div>
      )
    }
   },
  { field: 'genre', headerName: 'Genre', width: 140 },
  { field: 'year', headerName: 'Year', width: 140 },
  { field: 'isSeries', headerName: 'isSeries', width: 140 },
  {
    field: 'action',
    headerName: 'Action',
    width: 160,
    renderCell: (params) => {
      return (
        <div className='flex items-center'>
        <Link to={ {pathname: "/product/"+params.row._id, movie: params.row}}>
         <button className='bg-green-400 border-none cursor-pointer text-white rounded mr-3 p-1'>Edit</button>
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
        rows={movie}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId= {r => r._id}
      />
    </div>
    
  )
}

export default ProductList
