import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import React from "react";
import LinkItem from "./LinkItem";
import {routes} from '../../../config/consts'

const LinkList = () => {
    return (<>
        <List>
            {routes.map((route, index) => {
                return <LinkItem key={index} text={route.name} link={route.path}>
                    <route.icon/>
                </LinkItem>
            })}
        </List>
        <Divider/>
    </>);
};

export default LinkList;
