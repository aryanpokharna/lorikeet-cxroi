"use client";

import React from "react";
import { CalculationResults } from "@/lib/calculator";
import { formatCurrency } from "@/lib/calculator";
import { TrendingUp, AlertCircle } from "lucide-react";

interface ResultsSummaryProps {
  results: CalculationResults;
}

export default function ResultsSummary({ results }: ResultsSummaryProps) {
  const { comparison, lorikeet } = results;
  const baselineLabel =
    comparison.baselineType === "human"
      ? "Human team"
      : "Pay-per-ticket solution";

  return (
    <div className="border border-black rounded-[12px] p-4 sm:p-6 mt-6 md:mt-8 bg-white shadow-sm relative overflow-hidden">
      {/* Yellow gradient background layers */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>
      <div className="relative z-10">
        <h2 className="text-lg mb-3 md:mb-4 text-black sm:text-xl">
          Your savings with Lorikeet
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-black p-4 bg-white flex flex-col justify-between stat-box-hover">
              <div className="flex items-center justify-center mb-4">
                <span className="text-[28px] leading-tight text-black">
                  {comparison.costReduction.toFixed(0)}%
                </span>
              </div>
              <div className="text-center">
                <span className="text-black text-sm">Cost reduction</span>
              </div>
            </div>

            <div className="rounded-[10px] border border-black p-4 bg-white flex flex-col justify-between stat-box-hover">
              <div className="flex items-center justify-center mb-4">
                <span className="text-[28px] leading-tight text-black">
                  {formatCurrency(comparison.annualSavings)}
                </span>
              </div>
              <div className="text-center">
                <span className="text-black text-sm">Annual savings</span>
              </div>
            </div>

            <div className="rounded-[10px] border border-black p-4 bg-white flex flex-col justify-between stat-box-hover">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-[28px] leading-tight text-black">
                      {formatCurrency(lorikeet.costPerResolution)}
                    </span>
                    <span className="text-xs text-black mt-1">Lorikeet</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-[28px] leading-tight text-black">
                      {formatCurrency(comparison.baselineCostPerResolution)}
                    </span>
                    <span className="text-xs text-black mt-1">
                      {baselineLabel}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-black text-sm">Cost per resolution</span>
              </div>
            </div>

            <div className="rounded-[10px] border border-black p-4 bg-white flex flex-col justify-between stat-box-hover">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-[28px] leading-tight text-black">
                      {formatCurrency(lorikeet.monthlyCost)}
                    </span>
                    <span className="text-xs text-black mt-1">Lorikeet</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-[28px] leading-tight text-black">
                      {formatCurrency(comparison.baselineMonthlyCost)}
                    </span>
                    <span className="text-xs text-black mt-1">
                      {baselineLabel}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-black text-sm">Total cost</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-black p-4 bg-white">
              <div className="flex flex-col items-center mb-4">
                <div className="p-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-black text-xl text-center">
                  It's a win/win situation
                </h3>
              </div>
              <p className="text-black text-[14px]">
                Other AI agents will attempt every ticket, only to fail at most
                of them. Lorikeet only engages when it's confident it can help
                and will escalate when it can't. Everyone wins.
              </p>
            </div>
            <div className="rounded-[10px] border border-black p-4 bg-white">
              <div className="flex flex-col items-center mb-4">
                <div className="p-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-black text-xl text-center">
                  Stop paying for every ticket
                </h3>
              </div>
              <p className="text-black text-[14px]">
                If you're paying per ticket (not per resolution), you're getting
                ripped off. Lorikeet is priced per resolution. How do we
                navigate ambiguity about the definition of "resolved"? We give
                our customers full discretion: any ticket they don't like they
                don't pay for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
