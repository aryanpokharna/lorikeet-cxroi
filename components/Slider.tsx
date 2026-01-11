"use client";

import React from "react";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  displayValue?: string;
  helperText?: string;
  variant?: "default" | "yellow" | "pink" | "green" | "orange" | "blue" | "purple" | "teal";
}

export default function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  displayValue,
  helperText,
  variant = "default",
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  const getGradientBackground = () => {
    switch (variant) {
      case "teal":
        return {
          layer1: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(20, 184, 166, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 50%, rgba(94, 234, 212, 0.35) 0%, transparent 55%)",
          layer2: "radial-gradient(circle at 80% 60%, rgba(20, 184, 166, 0.3) 0%, transparent 40%), radial-gradient(circle at 20% 40%, rgba(94, 234, 212, 0.3) 0%, transparent 40%)",
        };
      default:
        return {
          layer1: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255, 105, 180, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 50%, rgba(255, 215, 0, 0.35) 0%, transparent 55%)",
          layer2: "radial-gradient(circle at 80% 60%, rgba(138, 43, 226, 0.3) 0%, transparent 40%), radial-gradient(circle at 20% 40%, rgba(0, 191, 255, 0.3) 0%, transparent 40%)",
        };
    }
  };

  const gradients = getGradientBackground();

  return (
    <div className="border border-black rounded-[8px] p-6 relative overflow-hidden bg-white animated-glow">
      {/* Gradient background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 blur-3xl opacity-60"
          style={{
            background: gradients.layer1,
          }}
        />
        <div
          className="absolute inset-0 blur-2xl opacity-50"
          style={{
            background: gradients.layer2,
          }}
        />
      </div>

      <div className="relative z-10 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black text-xl">{label}</h3>
          <div className="bg-white text-black px-3 py-1 rounded-[8px] text-sm border border-black">
            {displayValue || `${value}%`}
          </div>
        </div>
        <div className="pt-2 pb-4">
          <div className="relative">
            <div className="w-full h-2 bg-white border border-black rounded-[8px]">
              <div
                className="absolute h-2 bg-black rounded-[8px] transition-all"
                style={{ width: `${percentage}%` }}
              />
              <div
                className="absolute w-5 h-5 bg-white border border-black rounded-[8px] -mt-1.5 transform -translate-x-1/2 transition-all"
                style={{ left: `${percentage}%` }}
              />
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-xs text-black mt-4">
            <span>{min}%</span>
            <span>{min + (max - min) * 0.25}%</span>
            <span>{min + (max - min) * 0.5}%</span>
            <span>{min + (max - min) * 0.75}%</span>
            <span>{max}%</span>
          </div>
        </div>
        {helperText && (
          <div className="bg-white text-black p-4 rounded-[8px] mt-2 border border-black">
            <span>{helperText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
