import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";


const SearchBar = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState({
        startDate: null
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(source + " " + destination + " " + date.startDate);
        // axios.post("http://localhost:4040/", { source, destination, date })
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    };

    return (
        <>
            <div>
                <form className="mt-2" onSubmit={handleSubmit}>
                    <div className="flex items-center">
                    <input
                        className="block m-2 py-4 px-3 w-48 text-sm font-medium outline-none bg-transparent border border-gray-400 focus:border-green-500 rounded-lg"
                        type="text"
                        placeholder="Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                    <img className="w-8 h-8" src="src\images\bidirectional-arrow.png"
                        onClick={(e) => {
                            var dest = destination;
                            setDestination(source);
                            setSource(dest)
                        }} />
                    <input
                        className="block m-2 py-4 px-3 w-48 text-sm font-medium outline-none bg-transparent border border-gray-400 focus:border-green-500 rounded-lg"
                        type="text"
                        placeholder="Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <div className="block m-2 py-1 px-3 w-72 outline-none bg-transparent border border-gray-400 rounded-lg">
                        <Datepicker
                            minDate={new Date()}
                            useRange={false}
                            popoverDirection="down"
                            asSingle={true}
                            value={date}
                            onChange={(e) => setDate(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-full ml-4 px-8 flex-shrink-0">
                        Search
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default SearchBar;
