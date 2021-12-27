import React from 'react';


const Loader = ()=>{

    return(
        <>
            <div className="container text-center">
                <div className="spinner-grow text-success"></div>
                <div className="spinner-grow text-info"></div>
                <div className="spinner-grow text-warning"></div>
            </div>
        </>
    )
}

export default Loader;