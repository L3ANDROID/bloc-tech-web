import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { HistoryCard } from "../../components";
import { list } from "../../services/user"

const Home = () => {
    // paso1 declar una funcion donde debo almacenar a los usuario que traiga de mi API
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await list();
        setUsers(response.data);
    };

    //esto evita que se vuelva un bucle infinito
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {users &&
                    users.map((user,key) => (
                        <Grid key={key} item xs={12} sm={6}>
                            <HistoryCard user={user} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}

export default Home;