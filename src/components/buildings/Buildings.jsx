'use client'
import { useBuildings } from "@/hooks/useBuildings"
function Buildings() {
    const { data } = useBuildings()
    console.log(data.buildings)
    return (
        <div>
            {data.buildings.map((item) => (
                <h1>{item.name}</h1>
            ))}

        </div>
    )
}

export default Buildings
