import React from 'react';
import { Dropdown, Space } from 'antd';
import { IoIosArrowDown } from "react-icons/io";
import { useBuildings } from '@/hooks/useBuildings';
import { useRouter } from 'next/navigation';
import { StyledMenu, StyledMenuItem } from './style';

const BuildingsSelect = () => {
  const navigate = useRouter();
  const { data, isLoading } = useBuildings();

  const items = data?.buildings.map((building) => ({
    key: building.id,
    label: (
      <StyledMenuItem
        onClick={() => navigate.push(`/buildings/${building.id}`)}
      >
        {building.name}
      </StyledMenuItem>
    ),
  })) || [];

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{ items }}
          trigger={['click']}
          disabled={isLoading}
          dropdownRender={(menu) => (
            <StyledMenu>{menu}</StyledMenu>   
          )}
        >
          <div style={{ marginTop: '5px', cursor: 'pointer' }}>
            <IoIosArrowDown className='arrows'/>
          </div>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default BuildingsSelect;
