'use client'
import { useBuildings } from "@/hooks/useBuildings"
import { FaEye } from "react-icons/fa";
import { Table, TableContainer, Form, Input, Button, FormWrapper, StychkiTable } from "./style";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useAddBuilding } from "@/hooks/addBildings";
import Loader from "../loader/Loader";

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
                setAddBuilding({
                    name: '',
                    address: '',
                })

            },
            onError: (error) => {
                // console.log(error)
            }
        })
    }

    const copytext = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied:", text);
        }).catch((err) => {
            console.error("Copy failed:", err);
        });
    };


    return (
        <TableContainer>

            {role == 'admin' && <FormWrapper>
                <Form onSubmit={handleSumbit} >
                    <Input required onChange={addBuldingChange} value={addBuilding.name} name="name" type="text" placeholder="Bino nomini kiriting" />
                    <Input required onChange={addBuldingChange} value={addBuilding.address}  name="address" type="text" placeholder="Bino addresini kiriting" />
                    <Button>Qo'shish</Button>
                </Form>
            </FormWrapper>}
           
           <StychkiTable>
             
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
                        <tr>
                            <td>
                                <span className="icon">
                                    <FaRegCopy onClick={() => copytext(item.id)} className="copy" />
                                    <span id="copybox">{item?.id}</span>
                                </span>
                            </td>
                            <td>{item.name}</td>
                            <td>
                                <span className="icon">
                                    <FaLocationDot />{item.address}
                                </span>
                            </td>
                            <td className="nmap">
                                <Link href={`/binolar/${item?.id}`}><span><FaEye /></span></Link>
                            </td>
                        </tr>
                    </tbody>
                ))}

            </Table>
           </StychkiTable>
        </TableContainer >
    )
}

export default Buildings
