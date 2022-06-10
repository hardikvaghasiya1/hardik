import React from 'react';

function Detail({orjdata}) {
    return (
        orjdata.map((d,i)=>{
            return(
                <>
                <h1>{d.id}</h1>
                <h4>{d.name}</h4>
                <h4>{d.age}</h4>
                </>
            )
        })
    );
}

export default Detail;