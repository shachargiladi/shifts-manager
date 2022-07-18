import React, {useState} from "react";
import {Box, Drawer} from "@mui/material";
import styles from "../../../../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LinkList from "./Components/LinkList";
import {useRouter} from "next/router";
import {routes} from "../../config/consts";

const AppNavbar = () => {
    const [shouldOpenDrawer, setShouldOpenDrawer] = useState(false);
    const router = useRouter();

    const toggleDrawer = () => {
        setShouldOpenDrawer(!shouldOpenDrawer);
    }

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <LinkList/>
        </Box>
    );

    return (
        <div className={styles.container}>
            <AppBar position="absolute" dir={"rtl"}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{ml:2}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {routes.find(route => route.path === router.pathname)?.name ?? ""}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor={"right"} open={shouldOpenDrawer} onClose={toggleDrawer}>
                {list}
            </Drawer>
        </div>
    )
}

export default AppNavbar;
