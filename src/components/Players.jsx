

const players = [
    { id: 701, name: "Virat Kohli", country: "India", role: "Batsman", runs: 12000 },
    { id: 702, name: "Joe Root", country: "England", role: "Batsman", runs: 10500 },
    { id: 703, name: "Pat Cummins", country: "Australia", role: "Bowler", runs: 1500 },
    { id: 704, name: "Rohit Sharma", country: "India", role: "Batsman", runs: 11000 }
];

function Players() {
    return (
        <>
        {players.map((player) => (
            <div key={player.id}>
                <h2>Player: {player.name}</h2>
                <p>Country: {player.country}</p>
                <p>Role: {player.role}</p>
                <p>Total Runs: {player.runs}</p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Players;
