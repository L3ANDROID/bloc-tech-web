import { useEffect, useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import { HistoryCard, Loader } from "../../components";
import { list } from "../../services/user"
import { Link } from "react-router-dom";

const Home = () => {
    // paso1 declar una funcion donde debo almacenar a los usuario que traiga de mi API
    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(false)
    const [activateLoader, setActivateLoader] = useState(true);

    const fetchUsers = async () => {
        const response = await list();
        setActivateLoader(false)
        if (!response) {
            return setUsers(false)
        };
        setUsers(response.data);
    };

    //esto evita que se vuelva un bucle infinito
    useEffect(() => {
        fetchUsers();
        setUpdateUser(false)
    }, [updateUser]);

    return (
        <Container maxWidth="xl">
            {activateLoader ? <Loader /> : ""}
            <Grid container spacing={3}>
                {users.length && sessionStorage.getItem("token")
                    ?
                    users.map((user, key) => (
                        <Grid key={key} item xs={12} sm={6}>
                            <HistoryCard user={user} setUpdateUser={setUpdateUser} />
                        </Grid>
                    ))
                    :
                    users.length === 0 && sessionStorage.getItem("token")
                        ?
                        <div>
                            <h1>No hay usuarios registrados, por favor registre uno en la sección de Registro</h1>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >Regitrar
                                </Button>
                            </Link>
                        </div>
                        :
                        <div>
                            <h1>Debe iniciar sesión para visualizar a los clientes</h1>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >Iniciar Sesión
                                </Button>
                            </Link>
                        </div>
                }
            </Grid>
        </Container>
    )
}

export default Home;