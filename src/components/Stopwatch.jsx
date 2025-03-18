import { useEffect, useState } from "react";

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [laps, setLaps] = useState([]); 

    const startTimer = () => {
        if (!isRunning) {
            const id = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
            setIntervalId(id);
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
        setLaps([]); 
    };

    const recordLap = () => {
        if (isRunning) {
            setLaps([...laps, time]); 
        }
    };

    useEffect(() => {
        return () => stopTimer(); 
    }, []);

    return (
        <div>
            <p>Time: {time} sec</p>
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={recordLap} disabled={!isRunning}>Lap</button>

            <h3>Laps:</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {lap} sec</li>
                ))}
            </ul>
        </div>
    );
};
