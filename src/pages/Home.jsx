import ReservationTable from "../components/ReservationTable.jsx";

function Home() {
    return (
        <>
            <h1>Heutige Reservierungen</h1>
            <ReservationTable filterToday={true} />
        </>
    )
}

export default Home;