import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import SaveIcon from '@mui/icons-material/Save';
import { edit } from '../../services/user';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ user, openDialog, handleOpenDialog, setUpdateUser }) {

    const {name, last_name, email, password} = user

    const [dataUser, setDataUser] = React.useState({ name, last_name, email, password })
    const [activateLoader, setActivateLoader] = React.useState(false);

    const handleEditUser = (e) => {
        const {name, value} = e.target;
        setDataUser(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSaveUser = async () => {
        setActivateLoader(true)
        const response = await edit(dataUser, user._id)
        if(response){
            setActivateLoader(false)
            setUpdateUser(true)
            return handleOpenDialog()
        }
        setActivateLoader(false)
        alert("Ocurrió un problema :/")

    }

    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleOpenDialog}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleOpenDialog}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            ID: {user._id}
                        </Typography>
                        <Button
                            autoFocus
                            color="secondary"
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleSaveUser}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Editar Nombre(s):"
                        />
                        <TextField
                            disabled={activateLoader ? true : false}
                            label="Nombres"
                            onChange={handleEditUser}
                            name="name"
                            variant="standard"
                            value={dataUser.name}
                            fullWidth
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Editar Apellido(s):"
                        />
                        <TextField
                            disabled={activateLoader ? true : false}
                            label="Apellidos"
                            onChange={handleEditUser}
                            name="last_name"
                            variant="standard"
                            value={dataUser.last_name}
                            fullWidth
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Editar Correo:"
                        />
                        <TextField
                            disabled={activateLoader ? true : false}
                            label="Correo"
                            onChange={handleEditUser}
                            name="email"
                            variant="standard"
                            type="email"
                            value={dataUser.email}
                            fullWidth
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Editar contraseña:"
                        />
                        <TextField
                            disabled
                            label="Contraseña"
                            // onChange={handleChangeRegister}
                            name="password"
                            variant="standard"
                            value={user.password}
                            fullWidth
                        />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}