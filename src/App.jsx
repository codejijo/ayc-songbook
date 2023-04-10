import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
      </Box>
    </Container>
  )
}

export default App
