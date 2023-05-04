import Navbar from "../MainPage/Navbar";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import BusDetailsCard from "./BusDetailsCard";

const PassengerDashboard = ({ manyBusDetails }) => {
    return (
        <>
            <SearchBar />
            <div className="w-full flex">
                <SearchFilters />
                <div>
                    {manyBusDetails?.map((val, i) => (
                        <BusDetailsCard singleBusDetails={val} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PassengerDashboard;