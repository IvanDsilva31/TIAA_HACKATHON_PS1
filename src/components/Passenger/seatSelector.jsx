import { useState } from "react";

function SeatSelector(props) {
    const { seats, reservedSeats, onSelect } = props;
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (seat) => {
        if (reservedSeats.includes(seat)) {
            alert("This seat is already reserved.");
        } else if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const getSeatClass = (seat) => {
        if (reservedSeats.includes(seat)) {
            return "bg-gray-300 cursor-not-allowed";
        } else if (selectedSeats.includes(seat)) {
            return "bg-yellow-400";
        } else {
            return "bg-green-500 hover:bg-green-600";
        }
    };

    var availableSeats = seats.length * seats[0].length - (reservedSeats.length + selectedSeats.length);

    return (
        <div className='container mx-auto p-10'>
            <div className="w-full max-w-5xl mx-auto px-4 shadow-lg border-primary">
                <h3 className="text-2xl font-bold mb-4">Select your seats:</h3>
                <p className="text-xl font-bold m-2 text-primary text-center">Front</p>
                <div className="grid grid-cols-5 gap-4">
                    {seats.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col">
                            {row.map((seat, seatIndex) => (
                                <button
                                    key={seatIndex}
                                    className={`m-2 p-4 rounded-md ${getSeatClass(
                                        seat
                                    )} text-white`}
                                    disabled={reservedSeats.includes(seat)}
                                    onClick={() => handleSeatSelect(seat)}
                                >
                                    {seat}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
                <p className="text-xl font-bold m-2 text-primary text-center">Back</p>
                <div className="flex justify-between mt-4 w-1/2">
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-300 mr-2"></div>
                        <span>Reserved: {reservedSeats.length}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 mr-2"></div>
                        <span>Available {availableSeats}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-yellow-400 mr-2"></div>
                        <span>Selected: {selectedSeats.length}</span>
                    </div>
                </div>
                <div className="flex justify-end mt-4 pb-2">
                    <button
                        className="btn btn-primary disabled:opacity-50"
                        onClick={() => onSelect(selectedSeats)}
                        disabled={selectedSeats.length === 0}
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SeatSelector;
