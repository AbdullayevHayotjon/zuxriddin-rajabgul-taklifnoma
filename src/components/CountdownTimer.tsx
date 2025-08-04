import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2025-08-12T19:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'kun' },
    { value: timeLeft.hours, label: 'soat' },
    { value: timeLeft.minutes, label: 'daqiqa' },
    { value: timeLeft.seconds, label: 'soniya' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-script text-center mb-6 text-primary font-bold tracking-wide">
        To'y boshlanish arafasida
      </h3>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="bg-gradient-card backdrop-blur-sm rounded-full w-16 h-16 md:w-24 md:h-24 mx-auto flex flex-col items-center justify-center shadow-soft border border-primary/20"
          >
            <div className="text-lg md:text-3xl font-bold text-primary font-serif">
              {unit.value}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground font-sans">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;