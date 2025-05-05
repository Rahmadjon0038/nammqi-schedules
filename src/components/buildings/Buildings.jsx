'use client'
import { useBuildings } from "@/hooks/useBuildings"
import { FaEye } from "react-icons/fa";
import { Table, TableContainer } from "./style";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
function Buildings() {
    const { data, isLoading } = useBuildings()
    // console.log(isLoading)
    // console.log(data)

    return (
        <TableContainer>
            <Table>
                <tr>
                    <th>id</th>
                    <th>Nomi</th>
                    <th> Joylashuvi</th>
                    <th>Ko'rish</th>
                </tr>
                {data?.buildings?.map((item, index) => (
                    <tr index={index}>
                        <td> <span className="icon"><FaRegCopy className="copy" /> {item?.id.slice(0, 4)} </span></td>
                        <td>{item.name}</td>
                        <td> <span className="icon"><FaLocationDot />{item.address}</span></td>
                        <td className="nmap"><Link href={`/binolar/${item?.id}`}><span><FaEye /></span></Link></td>
                    </tr>
                ))}
            </Table>
        </TableContainer >
    )
}

export default Buildings
