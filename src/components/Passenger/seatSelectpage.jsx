import React from "react";
import SeatSelector from "./seatSelector";

function SeatSelectPage() {
    //   const seats = [
    //     ["1A", "2A", "3A", "4A", "5A", "6A"],
    //     ["1B", "2B", "3B", "4B", "5B", "6B"],
    //     ["1C", "2C", "3C", "4C", "5C", "6C"],
    //     ["1D", "2D", "3D", "4D", "5D", "6D"],
    //     ["1E", "2E", "3E", "4E", "5E", "6E"]
    //   ];
    const rows = 8;
    const cols = 5;

    const seats = [];

    for (let i = 1; i <= cols; i++) {
        const cols = [];

        for (let j = 0; j < rows; j++) {
            const seat = `${i}${String.fromCharCode(65 + j)}`;
            cols.push(seat);
        }
        
        seats.push(cols);
    }

    const reservedSeats = ["2C", "3D", "4E",];

    const handleSeatSelect = (selectedSeats) => {
        console.log("Selected seats:", selectedSeats);
    };

    return (
        <SeatSelector
            seats={seats}
            reservedSeats={reservedSeats}
            onSelect={handleSeatSelect}
        />
    );
}

export default SeatSelectPage;
