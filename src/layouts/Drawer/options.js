import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LoginIcon from '@mui/icons-material/Login';

export const options = [
    {
        name: "Home",
        icon: <HomeIcon />,
        route: "/"
    },
    {
        name: "Contact",
        icon: <PhoneIcon />,
        route: "/contact"
    },
    {
        name: "Login",
        icon: <LoginIcon />,
        route: "/login"
    }
]