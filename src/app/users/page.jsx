'use client'
import { useGetusersData } from '@/hooks/users/useUpdateProfile'
import React from 'react'
import { Table } from './style'
function Users() {
  const { data } = useGetusersData()
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>ismi</th>
          <th>familiyasi</th>
          <th>username</th>
          <th>role</th>
        </tr>
      </thead>
      {data?.users?.map((item) => (
        <tbody key={item?.id}>
          <tr >
            <td>{item?.id?.length > 4 ? item.id.slice(0, 4) + '...' : id}</td>
            <td>{item?.firstname}</td>
            <td>{item?.lastname}</td>
            <td>{item?.username}</td>
            <td>{item?.role}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  )
}

export default Users
