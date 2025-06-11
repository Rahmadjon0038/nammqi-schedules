import React from 'react';
import { Dropdown, Space } from 'antd';
import { IoIosArrowDown } from "react-icons/io";
import { useBuildings } from '@/hooks/useBuildings';
import { useRouter } from 'next/navigation';
import { StyledMenu, StyledMenuItem } from './style';

const BuildingsSelect = () => {
  const navigate = useRouter();
  const { data, isLoading } = useBuildings();

  const menu = (
    <StyledMenu>
      {data?.buildings.map((building) => (
        <StyledMenuItem
          key={building.id}
          onClick={() => navigate.push(`/buildings/${building.id}`)}>
          {building.name}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown overlay={menu} trigger={['click']} disabled={isLoading}>
          <div style={{marginTop:'5px'}}>
            <IoIosArrowDown />
          </div>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default BuildingsSelect;
