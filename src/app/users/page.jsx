'use client';
import { useGetusersData } from '@/hooks/users/useUpdateProfile';
import React, { useState } from 'react';
import { CustomFilter, CustomInput, StychkiTable, Table } from './style';
import Loader from '@/components/loader/Loader';
import { Button, Dropdown, Space } from 'antd';
import { IoFilter } from "react-icons/io5";
function Users() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [daraja, setDaraja] = useState('');

  const inputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    if (val.trim() === '') {
      setSearch('');
      setDaraja('');
    }
  };

  const handleFilter = (filterType) => {
    setDaraja(filterType);
    setSearch(inputValue);
  };

  const { data, isLoading } = useGetusersData({ daraja, search });

  if (isLoading) {
    return <Loader />;
  }

  const items = [
    {
      key: '1',
      label: (
        <p onClick={() => handleFilter('lastname')}>Ismi</p>

      ),
    },
    {
      key: '2',
      label: (
        <p onClick={() => handleFilter('firstname')}>Familiyasi</p>
      ),
    },
    {
      key: '3',
      label: (
        <p onClick={() => handleFilter('username')}>Foydalanuvchi nomi</p>
      ),
    },


  ]

  return (
    <>
      <CustomFilter>
        <CustomInput
          type="text"
          placeholder="Qidirish..."
          value={inputValue}
          onChange={inputChange}
        />
        <Dropdown
          className="custom-dropdown"
          menu={{ items }}
          placement="top"
          overlayClassName="custom-menu"
        >
          <Button className='customBtn'><IoFilter /></Button>
        </Dropdown>
      </CustomFilter>
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
