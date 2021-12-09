import * as React from "react";
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import { remove } from "../../services/user";
import { FullScreenDialog } from "..";

//destructura el prop que resulta ser solo user
const HistoryCard = ({ user, setUpdateUser }) => {
  const [openDialog, setOpenDialog] = useState(false)

  // () => handleEditUser(user._id)
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog)
  };

  const handleDeleteUser = async (id,user) => {
    if(window.confirm("Desea Eliminar al usuario: "+user)){
      const response = await remove(id);
      console.log(response)
      setUpdateUser(true)
    }
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">Nombre(s): </Typography>
        <Typography sx={{ fontSize: 18 }} component="div">{user.name}</Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">Apellido(s): </Typography>
        <Typography sx={{ fontSize: 18 }} gutterBottom>{user.last_name}</Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">Correo: </Typography>
        <Typography sx={{ fontSize: 18 }}>{user.email}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          onClick={handleOpenDialog}
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: "auto" }}
          startIcon={<EditIcon />}>
          Edit
        </Button>
        <FullScreenDialog user={user} openDialog={openDialog} handleOpenDialog={handleOpenDialog} setUpdateUser={setUpdateUser}/>
        <Button
          onClick={() => handleDeleteUser(user._id, user.name)}
          variant="contained"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}>
          Delete
        </Button>
        {/* <IconButton
          style={{ marginLeft: "auto" }}
          color="secondary"
        >
          {<EditIcon />}
        </IconButton>
        <IconButton
          color="error"
          onClick={handleEditUser}
          aria-label="show more"
        >
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default HistoryCard;