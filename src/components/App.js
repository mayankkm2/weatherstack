import React, { useState } from 'react';
import Axios from 'axios';

import SearchBar from './Searchbar';

const App = () => {
    const [data, setData] = useState('');


    const onSearch = async (term) => {

        try {
            const response = await Axios.get("http://api.weatherstack.com/current", {
                params: { access_key: '568cff90b419799d93a50a5abd8e14eb', query: term }

            });
            //   console.log(response.data.current.temperature);
            console.log(response.data);

            setData(response.data.current.temperature);

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <div style={{ background: "lightblue", fontSize: "large" }}>

                <SearchBar onSubmit={onSearch} />


                <div >Temperature :{data} deg C</div>

            </div>
        </>
    );


}

export default App;
