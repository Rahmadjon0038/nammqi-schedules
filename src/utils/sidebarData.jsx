import { FaRegBuilding } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
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
        name:"Dars jadvali",
        path:"/darsjadvali",
        icon:<FaTable />
    },
    {
        id:3,
        name:"Uqtuvchilar",
        path:"/tichers",
        icon:<FaChalkboardTeacher />
    },    
]

