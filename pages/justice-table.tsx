import React from "react";
import JusticeTable from "../src/JusticeTable/JusticeTable";
import {Soldier} from "../src/App/types/types";

const soldiers: Soldier[] = [{
    first_name: 'שחר',
    last_name: 'גלעדי',
    is_officer: true,
    points: 2,
    is_released: false,
    personal_number: '8476774',
    phone_number: '0505922344',
    hagnam_points: 0,
    mador: "מגן",
    city: 'שהם',
    rank: 'סגן',
    service_type: "קבע"
},
    {
        first_name: 'אור',
        last_name: 'גלעדי',
        is_officer: true,
        points: 3,
        is_released: false,
        personal_number: '8476723',
        phone_number: '0505922322',
        hagnam_points: 0,
        mador: "מגן",
        city: 'שהם',
        rank: 'סמל',
        service_type: "חובה"
    },
    {
        first_name: 'גל',
        last_name: 'גלעדי',
        is_officer: true,
        points: 8,
        is_released: false,
        personal_number: '8476775',
        phone_number: '0505922344',
        hagnam_points: 0,
        mador: "מגן",
        city: 'שהם',
        rank: 'סגן',
        service_type: "חובה"
    }];

const justiceTablePage = () => {
    return (
        <JusticeTable Soldiers={soldiers}/>
    );
}

export default justiceTablePage;
