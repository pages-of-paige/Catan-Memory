import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <p>
        Time Remaining:{" "}
        {time > 0 ? time : <span>Game over! Better luck next time.</span>}
      </p>
    </div>
  );
};

export default Timer;
