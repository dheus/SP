import { useState, useEffect } from "react";
const Counter = ({text, initialCount, endCount, started }) => {
    const [count, setCount] = useState(initialCount);
  
    useEffect(() => {
      let intervalId;
      if (started) {
        intervalId = setInterval(() => {
          if (count < endCount) {
            setCount(prevCount => prevCount + 1);
          }
        }, 50); // Increment count every 100 milliseconds
      }
  
      return () => clearInterval(intervalId);
    }, [count, endCount, started]);
  
    return (
      <div className="counter">
        <span className="counter__number">{count}</span>
        <h2 className="counter__text">{text}</h2>
      </div>
    );
  };
export default Counter