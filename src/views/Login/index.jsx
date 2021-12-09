import { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { login, signin } from '../../services/auth';
import { Loader } from '../../components';

const Login = () => {
    const [inputsLogin, setInputsLogin] = useState({
        email: "",
        password: ""
    });
    const [inputsRegister, setInputsRegister] = useState({
        name: "",
        last_name: "",
        email: "",
        password: ""
    });
    const [labelLogin, setLabelLogin] = useState(false);
    const [labelRegister, setLabelRegister] = useState({
        type: "",
        message: ""
    });
    const [activateLoader, setActivateLoader] = useState(false);

    const handleChangeLogin = e => {
        const { name, value } = e.target;
        setInputsLogin((inputsLogin) => ({
            ...inputsLogin,
            [name]: value
        }));
    }
    const handleChangeRegister = e => {
        const { name, value } = e.target;
        setInputsRegister((inputsRegister) => ({
            ...inputsRegister,
            [name]: value
        }));
    }

    const handleSubmit = async (input) => {
        let response = false;
        setActivateLoader(true);
        if (input === "login"){
            response = await login(inputsLogin)
            if(!response) {
                setActivateLoader(false)
                return setLabelLogin(true)
            }
        }else if(input === "signin") {
            response = await signin(inputsRegister)
            if(response) {
                setActivateLoader(false)
                return setLabelRegister({type: "green", message: "Registro exitoso, inicie sesión para acceder al contenido."})
            }else{
                setActivateLoader(false)
                return setLabelRegister({type: "red", message: "No se pudo registrar, intentelo de nuevo o más tarde"})
            }
        }
        setActivateLoader(false)
        console.log(response)
        return window.location.href = "/";
    }

    return (
        <Container maxWidth="xl">
            {activateLoader ? <Loader /> : ""}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h1>Iniciar Sesión</h1>
                    <p>
                        Inicia sesión para acceder a los usuarios y administrarlos. Si no tienes cuenta, puedes crearla en el otro formulario. 
                    </p>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="E-mail"
                                onChange={handleChangeLogin}
                                name="email"
                                type="email"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                onChange={handleChangeLogin}
                                name="password"
                                type="password"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                fullWidth
                                onClick={() => handleSubmit("login")}
                            >
                                LOGIN
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <span style={{color:"red"}}>
                                {labelLogin
                                ? "Correo o contraseña incorrecta, intentelo de nuevo."
                                : ""
                                }
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h1>Registrarse</h1>
                    <p>
                        Si aún no cuentas con una cuenta puedes registrarte gratuitamente llenando el siguiente formulario.
                    </p>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombres"
                                onChange={handleChangeRegister}
                                name="name"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Apellidos"
                                onChange={handleChangeRegister}
                                name="last_name"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo"
                                onChange={handleChangeRegister}
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                onChange={handleChangeRegister}
                                name="password"
                                type="password"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                fullWidth
                                onClick={() => handleSubmit("signin")}
                            >
                                SIGN IN
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            {labelRegister.message !== "" && labelRegister.type !== ""
                                ? <span style={labelRegister.type === "red"
                                    ? {color:"red"}
                                    : {color: "green"}
                                    }>{labelRegister.message}</span>
                                : ""
                                }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login