import React, { useState } from 'react';
import {
    Title, Wrapper, Info, CustomPagination,
    PagesizeAndTitle,Select
} from './style';
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';
import UpdateAuditoriumModal from '../AuditoriumModals/Auditoryrename';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAuth } from '@/context/authContext';


function Auditorium({ building, filter, search, setSearch }) {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5); // 👈 Default size 5

    const { data, isLoading, error } = useGetAuditorium(building, page, size, filter, search);
    const { role } = useAuth();

    const [selectedAuditorium, setSelectedAuditorium] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleEditClick = (auditorium) => {
        setSelectedAuditorium(auditorium);
        setOpenEditModal(true);
    };

    const handleCloseModal = () => {
        setOpenEditModal(false);
        setSelectedAuditorium(null);
    };

    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        setPage(1); // 👈 Size o‘zgarsa page 1ga qaytamiz
    };

    if (isLoading) return <Loader />;
    if (error) {
        const msg = 'Auditoriyalar mavjud emas';
        return <h2 style={{ marginTop: '20px' }}>{msg}</h2>;
    }
    

    return (
        <>
            <PagesizeAndTitle>
                <Title>Binoga tegishli Auditoriyalar</Title>

                {/* Page Size Dropdown */}
                <div className='select'>
                    <label htmlFor="pageSize" >Sahifada nechta ko‘rsatilsin:</label>
                    <Select 
                        id="pageSize"
                        value={size}
                        onChange={handleSizeChange}
                       
                    >
                        <option value={3}>3 ta</option>
                        <option value={5}>5 ta</option>
                        <option value={10}>10 ta</option>
                        <option value={20}>20 ta</option>
                    </Select>
                </div>
            </PagesizeAndTitle>

            <Wrapper>
                {data?.auditoriums?.length === 0 ? (
                    <h2 style={{ marginTop: '20px', textAlign: 'center' }}>
                        {search?.trim()
                            ? "Qidiruv bo‘yicha natija topilmadi"
                            : "Bu binoda auditoriyalar mavjud emas"}
                    </h2>
                ) : (
                    data?.auditoriums?.map((item) => (
                        <Info onClick={() => handleEditClick(item)} key={item?.id}>
                            <h3>{item?.name}</h3>
                            <p>Kafedrasi: {item?.department}</p>
                        </Info>
                    ))
                )}
            </Wrapper>

            {/* Edit Modal */}
            {selectedAuditorium && (
                <UpdateAuditoriumModal
                    open={openEditModal}
                    onClose={handleCloseModal}
                    auditorium={selectedAuditorium}
                    building={building}
                />
            )}

            {/* Pagination */}
            {data?.totalPages > 1 && (
                <CustomPagination>
                    <Stack spacing={2}>
                        <Pagination
                            count={data?.totalPages}
                            page={data?.currentPage}
                            onChange={(e, value) => setPage(value)}
                            variant="outlined"
                            shape="rounded"
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: 'white',
                                    borderColor: 'white',
                                    backgroundColor: '#3f3e3e',
                                },
                                '& .Mui-selected': {
                                    backgroundColor: '#333',
                                    color: 'white',
                                    borderColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#363333',
                                    },
                                },
                                '& .MuiPaginationItem-ellipsis': {
                                    color: 'gray',
                                },
                            }}
                        />
                    </Stack>
                </CustomPagination>
            )}
        </>
    );
}

export default Auditorium;
