import { Button, Container, Grid, TextField } from '@mui/material';
import { login } from '../../services/auth';
import { useState } from 'react';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        const response = await login(inputs)
        console.log(response)
    }

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h1>Login</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur accusantium aliquam ea itaque tenetur ipsam, sapiente
                        odio ab quas? Libero eveniet totam vitae nihil debitis distinctio
                        perferendis, quasi officia cupiditate.
                    </p>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="E-mail"
                                onChange={handleChange}
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                onChange={handleChange}
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
                                onClick={handleSubmit}
                            >
                                Iniciar Session
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h1>Pondremos un mensaje o una foto</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur accusantium aliquam ea itaque tenetur ipsam, sapiente
                        odio ab quas? Libero eveniet totam vitae nihil debitis distinctio
                        perferendis, quasi officia cupiditate.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login