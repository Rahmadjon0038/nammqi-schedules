import React from 'react'
import styled from 'styled-components'

const Load = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 140px;
    .loader{
    width:70px;
    height: 70px;
    border-radius: 50%;
    border: 10px;
    border-style: solid;
    border-color: transparent var(--borderColor) var(--borderColor) var(--borderColor);
    animation: identifier 2s  linear infinite;
}
    @keyframes identifier {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
function Loader() {
    return (
        <Load>
            <div className='loader'></div>
        </Load>
    )
}

export default Loader