'use client';
import { useGetusersData } from '@/hooks/users/useUpdateProfile';
import React, { useState } from 'react';
import { CustomFilter, Table } from './style';
import Loader from '@/components/loader/Loader';
import { CustomInput, CustomButton } from '../profile/style';

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

  return (
    <>
      <CustomFilter>
        <CustomInput
          type="text"
          placeholder="Qidirish..."
          value={inputValue}
          onChange={inputChange}
        />
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <CustomButton onClick={() => handleFilter('firstname')}>Ismi</CustomButton>
          <CustomButton onClick={() => handleFilter('lastname')}>Familiya</CustomButton>
          <CustomButton onClick={() => handleFilter('username')}>Foydalanuvchi nomi</CustomButton>
        </div>
      </CustomFilter>

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
    </>
  );
}

export default Users;
