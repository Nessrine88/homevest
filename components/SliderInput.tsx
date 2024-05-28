"use client";
import React, { useState, ChangeEvent } from "react";
// Add this to your JavaScript

interface SliderProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  className?: string;
  content?: string;
  step?: number;
  price?: boolean;
  percent?: boolean;
  onChange?: (value: number) => void;
}

const SliderInput: React.FC<SliderProps> = ({
  initialValue = 0,
  minValue = 0,
  maxValue = 100,
  onChange,
  className,
  step,
  content,
  price,
  percent,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`${className} w-full mx-auto mt-8`}>
      <div className="flex justify-between items-center">
        <p className="text-[20px] text-opacity-45">{content}</p>
        <div className="mt-2  ">
          <p className="text-opacity-45 text-[20px]">
            {price && "AED"} {value} {percent && "%"}
          </p>
        </div>
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        step={step}
        value={value}
        className="w-full h-[5px] rounded bg-gray-300 appearance-none focus:outline-none focus:shadow-outline input-range"
        onChange={handleChange}
      />
      <style jsx>{`
        .input-range::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #1c4966 0%,
            #1c4966 ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db 100%
          );
          border-radius: 10px; // adjust this value as needed
          height: 5px; // adjust this value as needed
        }

        .input-range::-moz-range-track {
          background: linear-gradient(
            to right,
            #1c4966 0%,
            #1c4966 ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db ${((value - minValue) * 100) / (maxValue - minValue)}%,
            #d1d5db 100%
          );
          border-radius: 10px; // adjust this value as needed
          height: 5px; // adjust this value as needed
        }

        input[type="range"]::-webkit-slider-thumb {
          width: 20px; // adjust this value as needed
          height: 20px; // adjust this value as needed
          border: 4px solid #1c4966;
          background-color: white;
          border-radius: 50%;
          appearance: none;
          cursor: pointer;
          margin-top: -8px; // adjust this value as needed
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px; // adjust this value as needed
          height: 20px; // adjust this value as needed
          border: 4px solid #1c4966;
          background-color: white;
          border-radius: 50%;
          appearance: none;
          cursor: pointer;
          margin-top: -8px; // adjust this value as needed
        }
      `}</style>
    </div>
  );
};

export default SliderInput;
