import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import Link from "next/link";

type props = {
    children: JSX.Element,
    link: string,
    text: string
}

const LinkItem: React.FC<props> = ({link = '/', text,children}) => {
    return (
        <Link href={link}>
            <ListItemButton>
                <ListItemIcon>
                    {children}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </Link>
    );
}

export default LinkItem;
