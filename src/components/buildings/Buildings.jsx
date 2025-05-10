'use client'
import { useBuildings } from "@/hooks/useBuildings"
import { FaEye } from "react-icons/fa";
import { Table, TableContainer, Form, Input, Button, FormWrapper } from "./style";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useAddBuilding } from "@/hooks/addBildings";

function Buildings() {

    const { data, isLoading } = useBuildings()
    const { role, setRole } = useAuth()

    const mutation = useAddBuilding()
    const [addBuilding, setAddBuilding] = useState({
        name: '',
        address: '',
    })
    const addBuldingChange = (e) => {
        let { name, value } = e.target;
        setAddBuilding({ ...addBuilding, [name]: value })
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        mutation.mutate({
            addBuilding, getData: (data) => {
                // console.log(data)
            },
            onError: (error) => {
                // console.log(error)
            }
        })
    }



    return (
        <TableContainer>
            {role == 'admin' && <FormWrapper>
                <Form onSubmit={handleSumbit} >
                    <Input required onChange={addBuldingChange} name="name" type="text" placeholder="Bino nomini kiriting" />
                    <Input required onChange={addBuldingChange} name="address" type="text" placeholder="Bino addresini kiriting" />
                    <Button>Saqlash</Button>
                </Form>
            </FormWrapper>}
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nomi</th>
                        <th> Joylashuvi</th>
                        <th>Ko'rish</th>
                    </tr>
                </thead>
                {data?.buildings?.map((item, index) => (
                    <tbody key={index}>
                        <tr  index={index}>
                            <td> <span className="icon"><FaRegCopy className="copy" /> {item?.id.slice(0, 4)} </span></td>
                            <td>{item.name}</td>
                            <td> <span className="icon"><FaLocationDot />{item.address}</span></td>
                            <td className="nmap"><Link href={`/binolar/${item?.id}`}><span><FaEye /></span></Link></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </TableContainer >
    )
}

export default Buildings
