import React, { useEffect, useState } from "react";

const SearchBar = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth()+1).padStart(2,"0");
    let day = String(date.getDate()+1).padStart(2,"0");
    let tomorrow = year+"-"+month+"-"+day;
    return (
        <>
            <nav className="flex items-center">
                <input
                    className="block m-2 py-4 px-3 w-48 text-sm font-medium outline-none bg-transparent border border-gray-400 focus:border-green-500 rounded-lg"
                    type="text"
                    placeholder="Source"
                />
                <i className="icon icon-right-arrow"></i>
                <input
                    className="block m-2 py-4 px-3 w-48 text-sm font-medium outline-none bg-transparent border border-gray-400 focus:border-green-500 rounded-lg"
                    type="text"
                    placeholder="Destination"
                />
                <input
                    className="block m-2 py-3 px-3 outline-none bg-transparent border border-gray-400 focus:border-green-500 rounded-lg"
                    type="date"
                    value={tomorrow}
                />
                <button type="button" className="btn btn-primary rounded-full ml-4 px-8">
                    Search
                </button>

            </nav>
        </>
    );
}
export default SearchBar;
