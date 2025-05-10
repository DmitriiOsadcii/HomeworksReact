import { AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { useState } from "react";

const MainField = () => {
    const [state, setState] = useState(false);

    const showModal = () => {
        setState(prev => !prev);
    }


    return (
        <>
            <AppBar position="static" sx={{ height: '40px' }}>
                <Typography variant="h4">My Material UI App</Typography>
            </AppBar>
            <Container sx={{
                display: 'flex',
                marginTop: '20px',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h6">Добро пожаловать в наше приложение!</Typography>
                <Button onClick={showModal} variant="contained" sx={{ width: '25%' }}>Открыть диалоговое окно</Button>
            </Container>
            {<Dialog open={state} >
                <DialogContent>
                    <DialogTitle>
                        Использовать Material UI?
                    </DialogTitle>
                    <DialogContentText>
                        Это простое React приложение с использованием Material UI . Вы можете по своему усмотрению.
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={showModal}>Отмена</Button>
                        <Button onClick={showModal} autoFocus>
                            Согласен
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>}
        </>
    )
}

export default MainField