'use client';
import React, { useRef, useState } from "react";

export default function TimerPage() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timeInterval = useRef<number | null>(null);

    const handleStart = () => {
        if (isRunning) return;
        setIsRunning(true);
        timeInterval.current = window.setInterval(() => {
            setTimer((prev) => prev + 10);
        }, 10);
    };

    const handlePause = () => {
        if (!isRunning) return;
        setIsRunning(false);
        if (timeInterval.current !== null) {
            clearInterval(timeInterval.current);
            timeInterval.current = null;
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        if (timeInterval.current !== null) {
            clearInterval(timeInterval.current);
            timeInterval.current = null;
        }
        setTimer(0);
    };

    const formatTime = (timer: number) => {
        const minutes = Math.floor(timer / 60000).toString().padStart(2, "0");
        const seconds = Math.floor((timer / 1000) % 60).toString().padStart(2, "0");
        const milliseconds = (timer % 1000).toString().padStart(3, "0");
        return { minutes, seconds, milliseconds };
    };

    const { minutes, seconds, milliseconds } = formatTime(timer);

    return (
        <div className="timer-container">
          <div className="timer-box flex space-x-2">
            <h2>{minutes}</h2>
            <h2>{seconds}</h2>
            <h2>{milliseconds}</h2>
          </div>
          <div  className="controls flex space-x-4 mt-4">
            <div className="border p-2 rounded bg-green-500 cursor-pointer">
              <button onClick={handleStart} disabled={isRunning}>Start</button>
            </div>
            <div className="border p-2 rounded bg-yellow-500 cursor-pointer">
            <button onClick={handlePause} disabled={!isRunning}>Pause</button>
            </div>
            <div className="border p-2 rounded bg-red-500 cursor-pointer">
                    <button onClick={handleReset}>Reset</button>
            </div>

          </div>

        </div>
    );
}
