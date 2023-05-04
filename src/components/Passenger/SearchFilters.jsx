import React, { useState } from "react";

const SearchFilters = () => {
    const [aB6, setAB6] = useState(false);
    const [aA6, setAA6] = useState(false);
    const [dA6, setDA6] = useState(false);
    const [sleeper, setSleeper] = useState(false);
    const [seater, setSeater] = useState(false);
    const [ac, setAc] = useState(false);
    const [priceFilter, setPriceFilter] = useState(10000);

    const aB6Checked = () => {
        setAB6(!aB6);
        console.log(aB6);
    }
    const aA6Checked = () => {
        setAA6(!aA6);
        console.log(aA6);
    }
    const dA6Checked = () => {
        setDA6(!dA6);
        console.log(dA6);
    }
    const sleeperChecked = () => {
        setSleeper(!sleeper);
        console.log(sleeper);
    }
    const seaterChecked = () => {
        setSeater(!seater);
        console.log(seater);
    }
    const acChecked = () => {
        setAc(!ac);
        console.log(ac);
    }
    const priceFilterChanged = () => {
        console.log(priceFilter);
    }
    const Checkbox = ({ label, value, onChange }) => {
        return (
            <label className="m-1 cursor-pointer flex center">
                <input className="checkbox checkbox-md" value={value} onChange={onChange} type="checkbox" />
                <span className="label-text ml-5">{label}</span>
            </label>
        );
    }
    return (
        <>
            <div className="m-2 p-3 object-center w-4/12 border border-gray-400 text-lg text-gray-500">
                <h1 className="text-2xl">Filters</h1>
                <div className="divider"></div>
                <h3 className="text-lg">Arrival and Departure time</h3>
                <Checkbox label={"Arrival before 6am"} value={aB6} onChange={aB6Checked} />
                <Checkbox label={"Arrival after 6pm"} value={aA6} onChange={aA6Checked} />
                <Checkbox label={"Departure after 6pm"} value={dA6} onChange={dA6Checked} />
                <div className="divider"></div>
                <h3 className="text-lg">Vehicle Class</h3>
                <Checkbox label={"Sleeper"} value={sleeper} onChange={sleeperChecked} />
                <Checkbox label={"Seater"} value={seater} onChange={seaterChecked} />
                <Checkbox label={"A/C"} value={ac} onChange={acChecked} />
                <div className="divider"></div>
                <h3 className="text-lg">Price Range</h3>
                <p className="label-text m-2">Prices below {priceFilter}</p>
                <input
                    className="range"
                    type="range"
                    min="1000"
                    max="10000"
                    step="1000"
                    value={priceFilter}
                    onChange={(e) => { setPriceFilter(e.target.value)}} />
            </div>
        </>
    )
}

export default SearchFilters;