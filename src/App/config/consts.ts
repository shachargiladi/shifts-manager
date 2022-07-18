import {Route} from "../types/types";
import HomeIcon from '@mui/icons-material/Home';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InsertChartIcon from '@mui/icons-material/InsertChart';

export const routes: Route[] = [
    {path:'/', name:'דף בית', icon: HomeIcon},
    {path:'/dashboard', name:'סטטיסטיקות', icon: InsertChartIcon},
    {path:'/justice-table', name:'טבלת צדק', icon: SportsScoreIcon},
    {path:'/people-managment', name:'אנשים', icon: ManageAccountsIcon},
    {path:'/shifts-managment', name:'תורנויות', icon: AssignmentIcon},
]
