import {SvgIcon} from "@mui/material";

export type mador = 'מגן' | '43' | '42' | 'הנדסת מערכת' | 'תשתיות' | 'אבנ"ח' | 'אוורסט' | 'אחר';
export type serviceType = 'חובה' | 'קבע';
export type rankType =
    'טוראי'
    | 'רבט'
    | 'סמל'
    | 'סמ"ר'
    | 'סג"מ'
    | 'סגן'
    | 'סרן'
    | 'רס"ל'
    | 'קמ"א'
    | 'קא"ב'
    | 'סמר'
    | 'קאב'
    | 'סגמ'
    | 'רסל'
    | 'קמא'
    | 'בקקצ';

export type Route = {
    path: string,
    name: string,
    icon: SvgIconComponent
};

export type SvgIconComponent = typeof SvgIcon;

export interface justiceTableRowType {
    name: string,
    personalNumber: string,
    mador: mador,
    points: number,
    rank: string,
    serviceType: serviceType,
    exemption?: string,
    hagnam?: number,
    shifts?: string[]
}

export interface header {
    propertyName: keyof justiceTableRowType,
    displayName: string,
    isAscending: boolean
}

export interface Soldier {
    first_name: string,
    last_name: string,
    personal_number: string,
    mador: mador,
    points: number,
    is_released: boolean,
    service_type: serviceType,
    is_officer: boolean,
    hagnam_points: number,
    rank: rankType,
    city: string,
    phone_number: string
}
