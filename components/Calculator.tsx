"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Switch } from "@headlessui/react";
import {
  CalculatorInputs,
  BaselineType,
  calculateROI,
  formatNumber,
} from "@/lib/calculator";
import InputField from "./InputField";
import Slider from "./Slider";
import ResultsSummary from "./ResultsSummary";
import ComparisonBreakdown from "./ComparisonBreakdown";
import { Grid } from "lucide-react";

export default function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    ticketsPerMonth: 10000,
    costPerTicket: 0.9,
    ticketsSolvableByAI: 50,
    baseline: "payPerTicket",
    human: {
      fullyLoadedCostPerYear: 80000,
      utilizationPercent: 75,
      handleTimeMinutes: 8,
      overheadPercent: 15,
    },
  });

  const results = useMemo(() => calculateROI(inputs), [inputs]);

  const isPayPerTicket = inputs.baseline === "payPerTicket";

  const handleSwitchChange = (enabled: boolean) => {
    handleBaselineChange(enabled ? "payPerTicket" : "human");
  };

  const handleTicketsChange = (value: string) => {
    const numValue = parseInt(value.replace(/,/g, "")) || 0;
    setInputs((prev) => ({ ...prev, ticketsPerMonth: numValue }));
  };

  const handleCostChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({ ...prev, costPerTicket: numValue }));
  };

  const handleSolvableChange = (value: number) => {
    setInputs((prev) => ({ ...prev, ticketsSolvableByAI: value }));
  };

  const handleBaselineChange = (baseline: BaselineType) => {
    setInputs((prev) => ({ ...prev, baseline }));
  };

  const handleHumanChange = <K extends keyof CalculatorInputs["human"]>(
    key: K,
    value: string
  ) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      human: { ...prev.human, [key]: numValue },
    }));
  };

  // Calculate effective tickets per month based on baseline
  const effectiveTicketsPerMonth =
    inputs.baseline === "human"
      ? (() => {
          // Calculate from human metrics: 40 hrs/week = 2080 hrs/year
          const hoursPerYear = 40 * 52; // 2080
          const hoursPerMonth = hoursPerYear / 12; // ~173.33
          const availableHoursPerAgentPerMonth =
            hoursPerMonth * (inputs.human.utilizationPercent / 100);
          const availableMinutesPerAgentPerMonth =
            availableHoursPerAgentPerMonth * 60;
          return inputs.human.handleTimeMinutes > 0
            ? Math.floor(
                availableMinutesPerAgentPerMonth /
                  inputs.human.handleTimeMinutes
              )
            : 0;
        })()
      : inputs.ticketsPerMonth;

  const solvableTickets = Math.round(
    effectiveTicketsPerMonth * (inputs.ticketsSolvableByAI / 100)
  );

  return (
    <div className="space-y-6 md:space-y-8 font-sans max-w-4xl mx-auto px-0 sm:px-2 md:px-0">
      <div
        className="relative rounded-[12px] p-0 sm:p-6 md:p-8 bg-white w-full max-w-[1440px] mx-auto"
        data-calculator-start
      >
        <div className="space-y-6">
          {/* Baseline selector */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-black" data-baseline-text>
              Select a baseline to compare
            </span>
            <div className="flex items-center gap-3">
              <span
                className={`text-sm ${
                  !isPayPerTicket ? "text-black" : "text-black"
                }`}
              >
                Human team
              </span>
              <div className="animated-glow-border inline-flex">
                <Switch
                  checked={isPayPerTicket}
                  onChange={handleSwitchChange}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <span
                    className={`${
                      isPayPerTicket ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
              <span
                className={`text-sm ${
                  isPayPerTicket ? "text-black" : "text-black"
                }`}
              >
                Pay-per-ticket AI
              </span>
            </div>
          </div>

          {inputs.baseline === "payPerTicket" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Tickets per month"
                description="How many tickets do you get on average?"
                value={inputs.ticketsPerMonth}
                onChange={handleTicketsChange}
                type="number"
                suffix="per month"
                icon={<Grid className="w-4 h-4" />}
                variant="yellow"
              />
              <InputField
                label="Cost per ticket"
                description="How much does your AI pay-per-ticket solution charge?"
                value={inputs.costPerTicket}
                onChange={handleCostChange}
                type="number"
                prefix="$"
                suffix="per ticket"
                variant="pink"
              />
            </div>
          )}

          {inputs.baseline === "human" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Yearly cost"
                description="Annual salary of a CX staff"
                value={inputs.human.fullyLoadedCostPerYear}
                onChange={(v) => handleHumanChange("fullyLoadedCostPerYear", v)}
                type="number"
                prefix="$"
                variant="green"
              />
              <InputField
                label="Utilisation on tickets"
                description="Percent of paid time spent handling tickets."
                value={inputs.human.utilizationPercent}
                onChange={(v) => handleHumanChange("utilizationPercent", v)}
                type="number"
                suffix="%"
                variant="orange"
              />
              <InputField
                label="Avg. time taken"
                description="Average minutes per ticket."
                value={inputs.human.handleTimeMinutes}
                onChange={(v) => handleHumanChange("handleTimeMinutes", v)}
                type="number"
                suffix="mins"
                variant="blue"
              />
              <InputField
                label="Overhead / Management"
                description="Overhead, QA, and management load."
                value={inputs.human.overheadPercent}
                onChange={(v) => handleHumanChange("overheadPercent", v)}
                type="number"
                suffix="%"
                variant="purple"
              />
            </div>
          )}

          <Slider
            label="Tickets solvable by AI"
            value={inputs.ticketsSolvableByAI}
            onChange={handleSolvableChange}
            min={0}
            max={100}
            step={1}
            variant="teal"
            helperText={
              inputs.baseline === "human"
                ? `${formatNumber(solvableTickets)} of ${formatNumber(
                    effectiveTicketsPerMonth
                  )} tickets can be solved by AI`
                : `${formatNumber(solvableTickets)} tickets can be solved by AI`
            }
          />

          {/* CSAT inputs removed for simplicity */}
        </div>

        <ResultsSummary results={results} />
      </div>
    </div>
  );
}
