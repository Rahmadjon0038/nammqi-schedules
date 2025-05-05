'use client'
import { useBuilding } from '@/hooks/buildings/buildingID';
import React from 'react'

function page({ params }) {
    const id = params?.building;
    const { data, isLoading, error } = useBuilding(id);
    console.log(isLoading)
    console.log(data)
    return (
        <div>
            <h2>{data?.address}</h2>
            <h2>{data?.name}</h2>
        </div>
    )
}

export default page
