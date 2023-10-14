import CheckboxList from './components/checkList'
import ColorTabs from './components/tabs';
import Container from '@mui/material/Container';
import React from 'react'

export default function App() {
  return (
    <Container maxWidth="sm">
      <ColorTabs/>
      <CheckboxList/>
    </Container>
  )
}
