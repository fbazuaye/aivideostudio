import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export const CountdownTimer = ({ 
  targetDate,
  className = ""
}: CountdownTimerProps) => {
  // Set a specific target date: March 1, 2026 at 7 PM UTC
  const [target] = useState(() => {
    if (targetDate) return targetDate;
    return new Date("2026-03-01T19:00:00Z");
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = target.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-secondary/80 border border-border rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[60px]"
      >
        <span className="text-xl md:text-2xl font-bold text-primary tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="w-4 h-4 text-primary" />
        <span>Training starts in:</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-xl font-bold text-muted-foreground">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-xl font-bold text-muted-foreground">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-xl font-bold text-muted-foreground">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};
