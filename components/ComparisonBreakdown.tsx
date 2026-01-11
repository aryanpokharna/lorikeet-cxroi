"use client";

import React from "react";
import { CalculationResults } from "@/lib/calculator";
import { formatCurrency } from "@/lib/calculator";
import { AlertCircle } from "lucide-react";

interface ComparisonBreakdownProps {
  results: CalculationResults;
}

export default function ComparisonBreakdown({
  results,
}: ComparisonBreakdownProps) {
  const { payPerTicket, lorikeet, human, comparison } = results;
  const baseline = comparison.baselineType === "human" ? human : payPerTicket;
  const baselineLabel =
    comparison.baselineType === "human"
      ? "Human team"
      : "Pay-per-ticket solution";

  return (
    <>
      <div className="rounded-[12px] p-4 sm:p-6 md:p-8 bg-white">
        <div className="space-y-8 md:space-y-12">
          <div className="rounded-[8px] p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-3 flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-black text-xl">
                ooo paying for every ticket
              </h3>
            </div>
            <p className="text-black text-[14px]">
              If you're paying per ticket (not per resolution), you're getting
              ripped off. Lorikeet is priced per resolution. How do we navigate
              ambiguity about the definition of "resolved"? We give our
              customers full discretion: any ticket they don't like they don't
              pay for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
