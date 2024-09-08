import axios from 'axios';
import React, { useRef, useState } from 'react';
import './index.css';

const App = () => {
    const [addweather, setaddweather] = useState([]);
    let inputRef = useRef();

    const checkStatus = (event) => {
        event.preventDefault();
        if (inputRef.current.value === '') {
            alert('Please Enter City Name');
            return;
        }

        axios(`https://api.weatherapi.com/v1/current.json?key=45a8fb89afff423d8c2210032240509&q=${inputRef.current.value}`)
         
    }

    return (
        <div className="min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-extrabold ">Weather App</h1>

            <form onSubmit={checkStatus} className="flex flex-col items-center w-full max-w-md space-y-4 p-6 bg-white = rounded-xl">
                <input
                    type="text"
                    placeholder='Enter City Name...'
                    ref={inputRef}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 "
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg  hover:bg-teal-700"
                >
                    Check Weather
                </button>
            </form>

            
        </div>
    );
};

export default App;
