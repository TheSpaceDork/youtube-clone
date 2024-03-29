import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar.jsx'
const Navbar = () => 
 (
  <Stack
    direction="row"
    alignItems='center'
    p={2}
    sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }}>
    <Link to='/' style= {{ display: 'flex', alignItems: 'center' }}>
   
      <p className='logo'>Tube</p>
    </Link>
  <SearchBar/>
  </Stack>
  )


export default Navbar