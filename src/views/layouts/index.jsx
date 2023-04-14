import { Box, Container, Typography } from '@mui/material';
import ResponsiveAppBar from './appBar';


const Layout = ({ children }) => {

    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="lg">
                {children}
            </Container>
        </>
    )
}

export default Layout;