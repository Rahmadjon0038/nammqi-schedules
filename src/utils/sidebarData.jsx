import { FaRegBuilding, FaTable, FaUsers } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";

export const sidebarData = [
    {
        id: 1,
        name: "Binolar",
        path: "/binolar",
        icon:<FaRegBuilding/>,
        hidden:true,
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
                id:3,
                name:"3-bino" // Bu ID ni yangiladim
            }
        ],
    },
    {
        id:2,
        name:'Auditoriyalar',
        path:'/auditoriyalar',
        icon:<FaUsersBetweenLines />,
        hidden:true,
    },
    {
        id:3,
        name:"Dars jadvali",
        path:"/darsjadvali",
        icon:<FaTable />,
        hidden:true,

    },
    {
        id:4,
        name:"Foydalanuvchilar",
        path:"/users",
        icon:<FaUsers />,
        hidden:false,
        role: "admin" // admin uchun ko'rsatish
    },    
]
