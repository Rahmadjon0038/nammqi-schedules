'use client';
import { useGetusersData } from '@/hooks/users/useUpdateProfile';
import React, { useState } from 'react';
import { CustomFilter, CustomInput, StychkiTable, Table } from './style';
import Loader from '@/components/loader/Loader';
import { Button, Dropdown } from 'antd';
import { IoFilter } from "react-icons/io5";

function Users() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [daraja, setDaraja] = useState('');

  const handleFilter = (filterType) => {
    setDaraja(filterType);
    setSearch(inputValue); 
  };

  const { data, isFetching } = useGetusersData({ daraja, search });

  const items = [
    { key: '1', label: <p onClick={() => handleFilter('lastname')}>Ismi</p> },
    { key: '2', label: <p onClick={() => handleFilter('firstname')}>Familiyasi</p> },
    { key: '3', label: <p onClick={() => handleFilter('username')}>Foydalanuvchi nomi</p> },
  ];

  return (
    <>
      <CustomFilter>
        <Dropdown
          className="custom-dropdown"
          menu={{ items }}
          placement="top"
          overlayClassName="custom-menu">
          <Button className='customBtn'>
            <IoFilter /> {daraja ? `Tanlangan: ${daraja}` : 'Filter turini tanlang'}
          </Button>
        </Dropdown>
        <CustomInput
          type="text"
          placeholder={daraja ? "Qidirish..." : "Avval filterni tanlang"}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setSearch(e.target.value);
          }}
          disabled={!daraja}
        />
      </CustomFilter>

      {isFetching && <p style={{textAlign:"center"}}> Qidirilmoqda...</p>}

      <StychkiTable>
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
          <tbody>
            {data?.users?.length > 0 ? (
              data.users.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.id?.length > 4 ? item.id.slice(0, 4) + '...' : item.id}</td>
                  <td>{item?.lastname}</td>
                  <td>{item?.firstname}</td>
                  <td>{item?.username}</td>
                  <td>{item?.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  Foydalanuvchilar topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </StychkiTable>
    </>
  );
}

export default Users;
