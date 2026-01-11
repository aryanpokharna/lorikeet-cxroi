"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  description?: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: "text" | "number";
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  variant?: "default" | "yellow" | "pink" | "green" | "orange" | "blue" | "purple";
}

export default function InputField({
  label,
  description,
  value,
  onChange,
  type = "text",
  prefix,
  suffix,
  icon,
  placeholder,
  variant = "default",
}: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // Format number with commas for display
    if (type === "number" && newValue) {
      // Remove commas for processing
      const numericValue = newValue.replace(/,/g, "");
      if (!isNaN(Number(numericValue))) {
        onChange(numericValue);
      }
    } else {
      onChange(newValue);
    }
  };

  const formatDisplayValue = (val: string | number): string => {
    if (type === "number" && val) {
      const numStr =
        typeof val === "string" ? val.replace(/,/g, "") : val.toString();
      if (!isNaN(Number(numStr)) && numStr !== "") {
        return Number(numStr).toLocaleString("en-US");
      }
    }
    return val.toString();
  };

  return (
    <div className="border border-black rounded-[8px] p-6 relative overflow-hidden bg-white">
      {/* Gradient background layers */}
      <div className="absolute inset-0">
        {variant === "yellow" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255, 215, 0, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(255, 235, 59, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255, 193, 7, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 220, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 248, 0, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : variant === "pink" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255, 105, 180, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(255, 20, 147, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255, 182, 193, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 105, 180, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 192, 203, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : variant === "green" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34, 197, 94, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(74, 222, 128, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(134, 239, 172, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(74, 222, 128, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : variant === "orange" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(251, 146, 60, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(249, 115, 22, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255, 165, 0, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : variant === "blue" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(96, 165, 250, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(147, 197, 253, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(96, 165, 250, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : variant === "purple" ? (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(168, 85, 247, 0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, rgba(192, 132, 252, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(221, 214, 254, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(192, 132, 252, 0.25) 0%, transparent 45%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255, 105, 180, 0.4) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 50%, rgba(255, 215, 0, 0.35) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 blur-2xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 80% 60%, rgba(138, 43, 226, 0.3) 0%, transparent 40%), radial-gradient(circle at 20% 40%, rgba(0, 191, 255, 0.3) 0%, transparent 40%)",
              }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 space-y-2">
        <h3 className="text-black text-xl">{label}</h3>
        {description && <p className="text-[12px] text-black">{description}</p>}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-black">{icon}</span>
            </div>
          )}
          {prefix && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-black">{prefix}</span>
            </div>
          )}
          <input
            type={type === "number" ? "text" : type}
            value={formatDisplayValue(value)}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full ${icon ? "pl-10" : prefix ? "pl-8" : "pl-3"} ${
              suffix ? "pr-24" : "pr-3"
            } py-2 border border-black rounded-[8px] focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black bg-white/90 backdrop-blur-sm`}
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
              margin: 0,
            }}
          />
          {suffix && (
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-black text-sm whitespace-nowrap">
                  {suffix}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
