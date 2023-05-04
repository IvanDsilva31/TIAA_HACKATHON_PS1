import Navbar from "../MainPage/Navbar";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import BusDetailsCard from "./BusDetailsCard";
import Map from "../Map/Map";

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
                     <div>
                        <Map />
                    </div>

                </div>
            </div>
        </>
    );
}

export default PassengerDashboard;