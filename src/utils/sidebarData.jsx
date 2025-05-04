import { FaRegBuilding } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6"
export const sidebarData = [
    {
        id: 1,
        name: "Binolar",
        path: "/binolar",
        icon:<FaRegBuilding/>,
        child: [
            {
                id:1,
                name:"1-bino"
            },
            {
                id:2,
                name:"2-bino"
            },
            {
                id:1,
                name:"2-bino"
            }
        ],
    },
    {
        id:2,
        name:'Auditoriyalar',
        path:'/auditoriyalar',
        icon:<FaUsersBetweenLines />
    },
    {
        id:3,
        name:"Dars jadvali",
        path:"/darsjadvali",
        icon:<FaTable />
    },
    {
        id:4,
        name:"Foydalanuvchilar",
        path:"/users",
        icon:<FaUsers />
    },    
]

