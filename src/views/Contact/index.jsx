import { useState } from "react";
import { Container, TextField, Button } from "@mui/material"

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        setInputs({
            ...inputs,
            [name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name", inputs.name);
        console.log("email", inputs.email);
    }

    return (
        <div>
            <Container maxWidth="lg">
                <h1>hola</h1>
            </Container>
        </div>
    )
}

export default Contact;