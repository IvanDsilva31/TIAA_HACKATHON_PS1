import React from "react";
import { Link } from "react-router-dom";
import SeatSelector from "./seatSelector";

function SeatSelectPage() {
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
        <>
            <SeatSelector
                seats={seats}
                reservedSeats={reservedSeats}
                onSelect={handleSeatSelect}
            />
            <div className="flex justify-center mt-4 pb-2">
                <Link to="/paymentpage" className="btn btn-primary">
                    Proceed to Payment
                </Link>
            </div>
        </>
    );
}

export default SeatSelectPage;
