export type BaselineType = "payPerTicket" | "human";

export interface CalculatorInputs {
  ticketsPerMonth: number;
  costPerTicket: number;
  ticketsSolvableByAI: number; // percentage 0-100
  baseline: BaselineType;
  human: {
    fullyLoadedCostPerYear: number; // USD
    utilizationPercent: number; // % of paid time on tickets
    handleTimeMinutes: number; // avg handle time per ticket
    overheadPercent: number; // management/qa overhead on cost
  };
}

export interface CalculationResults {
  // Pay-per-ticket metrics
  payPerTicket: {
    monthlyCost: number;
    ticketsAttempted: number;
    ticketsResolved: number;
    ticketsFailed: number;
    costPerResolution: number;
  };

  // Human team metrics
  human: {
    monthlyCost: number;
    ticketsAttempted: number;
    ticketsResolved: number;
    ticketsFailed: number;
    costPerResolution: number;
  };

  // Lorikeet metrics
  lorikeet: {
    monthlyCost: number;
    ticketsAttempted: number;
    ticketsResolved: number;
    ticketsFailed: number;
    costPerResolution: number;
  };

  // Comparison metrics
  comparison: {
    costReduction: number; // percentage
    annualSavings: number;
    baselineType: BaselineType;
    baselineMonthlyCost: number;
    baselineCostPerResolution: number;
  };
}

export function calculateROI(inputs: CalculatorInputs): CalculationResults {
  const {
    ticketsPerMonth,
    costPerTicket,
    ticketsSolvableByAI,
    baseline,
    human,
  } = inputs;

  // Calculate effective tickets per month based on baseline
  let effectiveTicketsPerMonth = ticketsPerMonth;

  // If baseline is human, calculate tickets per month from human metrics
  // Assuming 40 hours/week = 2080 hours/year per agent
  // Available hours per agent per month = (2080 / 12) * (utilizationPercent / 100)
  // Available minutes per agent per month = hours * 60
  // Tickets per agent per month = available minutes / handleTimeMinutes
  if (baseline === "human") {
    const hoursPerWeek = 40;
    const weeksPerYear = 52;
    const hoursPerYear = hoursPerWeek * weeksPerYear; // 2080
    const hoursPerMonth = hoursPerYear / 12; // ~173.33
    const availableHoursPerAgentPerMonth =
      hoursPerMonth * (human.utilizationPercent / 100);
    const availableMinutesPerAgentPerMonth =
      availableHoursPerAgentPerMonth * 60;
    const ticketsPerAgentPerMonth =
      human.handleTimeMinutes > 0
        ? Math.floor(availableMinutesPerAgentPerMonth / human.handleTimeMinutes)
        : 0;

    // Assume 1 agent for calculation (we'll calculate cost based on this)
    effectiveTicketsPerMonth = ticketsPerAgentPerMonth;
  }

  // Pay-per-ticket calculations
  const payPerTicketMonthlyCost = ticketsPerMonth * costPerTicket;
  const payPerTicketTicketsAttempted = ticketsPerMonth; // Attempts all tickets
  const payPerTicketTicketsResolved = Math.round(
    ticketsPerMonth * (ticketsSolvableByAI / 100)
  );
  const payPerTicketTicketsFailed =
    ticketsPerMonth - payPerTicketTicketsResolved;
  const payPerTicketCostPerResolution =
    payPerTicketTicketsResolved > 0
      ? payPerTicketMonthlyCost / payPerTicketTicketsResolved
      : 0;

  // Human team calculations
  // Calculate based on the tickets they can actually solve
  const humanTicketsResolved = effectiveTicketsPerMonth;
  const humanTicketsAttempted = effectiveTicketsPerMonth;
  const humanTicketsFailed = 0;

  // Cost calculation for human team
  // For 1 agent handling these tickets
  const humanMonthlyCost =
    (human.fullyLoadedCostPerYear / 12) * (1 + human.overheadPercent / 100);
  const humanCostPerResolution =
    humanTicketsResolved > 0 ? humanMonthlyCost / humanTicketsResolved : 0;

  // Lorikeet calculations
  // Calculate how many of the human-solved tickets are AI-solvable
  const solvableTickets = Math.round(
    effectiveTicketsPerMonth * (ticketsSolvableByAI / 100)
  );

  // Lorikeet resolves the same number of tickets as pay-per-ticket (all solvable)
  // When baseline is human, we resolve the AI-solvable portion of human tickets
  const lorikeetTicketsResolved =
    baseline === "human" ? solvableTickets : payPerTicketTicketsResolved;

  // Lorikeet has 1.4:1 good:bad ratio, so failed = resolved / 1.4
  const lorikeetTicketsFailed = Math.round(lorikeetTicketsResolved / 1.4);
  const lorikeetTicketsAttempted =
    lorikeetTicketsResolved + lorikeetTicketsFailed;

  // Lorikeet charges $0.75 per successful resolution
  const lorikeetMonthlyCost = lorikeetTicketsResolved * 0.75;
  const lorikeetCostPerResolution = 0.75; // Fixed rate

  // Baseline selection
  // For human baseline, calculate cost only for the AI-solvable tickets (the ones Lorikeet would handle)
  let baselineMonthlyCost: number;
  let baselineCostPerResolution: number;

  if (baseline === "human") {
    // Calculate the human cost to handle just the AI-solvable tickets
    // This represents the man-hours saved by using Lorikeet
    const minutesForSolvableTickets = solvableTickets * human.handleTimeMinutes;
    const hoursForSolvableTickets = minutesForSolvableTickets / 60;
    const hoursPerMonthPerAgent =
      (2080 / 12) * (human.utilizationPercent / 100);
    const agentFractionForSolvableTickets =
      hoursForSolvableTickets / hoursPerMonthPerAgent;
    const costForSolvableTickets =
      agentFractionForSolvableTickets *
      (human.fullyLoadedCostPerYear / 12) *
      (1 + human.overheadPercent / 100);

    baselineMonthlyCost = costForSolvableTickets;
    baselineCostPerResolution =
      lorikeetTicketsResolved > 0
        ? costForSolvableTickets / lorikeetTicketsResolved
        : 0;
  } else {
    baselineMonthlyCost = payPerTicketMonthlyCost;
    baselineCostPerResolution = payPerTicketCostPerResolution;
  }

  // Comparison metrics vs selected baseline
  const costReduction =
    baselineCostPerResolution > 0
      ? ((baselineCostPerResolution - lorikeetCostPerResolution) /
          baselineCostPerResolution) *
        100
      : 0;

  const annualSavings = (baselineMonthlyCost - lorikeetMonthlyCost) * 12;

  return {
    payPerTicket: {
      monthlyCost: payPerTicketMonthlyCost,
      ticketsAttempted: payPerTicketTicketsAttempted,
      ticketsResolved: payPerTicketTicketsResolved,
      ticketsFailed: payPerTicketTicketsFailed,
      costPerResolution: payPerTicketCostPerResolution,
    },
    human: {
      monthlyCost: humanMonthlyCost,
      ticketsAttempted: humanTicketsAttempted,
      ticketsResolved: humanTicketsResolved,
      ticketsFailed: humanTicketsFailed,
      costPerResolution: humanCostPerResolution,
    },
    lorikeet: {
      monthlyCost: lorikeetMonthlyCost,
      ticketsAttempted: lorikeetTicketsAttempted,
      ticketsResolved: lorikeetTicketsResolved,
      ticketsFailed: lorikeetTicketsFailed,
      costPerResolution: lorikeetCostPerResolution,
    },
    comparison: {
      costReduction,
      annualSavings,
      baselineType: baseline,
      baselineMonthlyCost,
      baselineCostPerResolution,
    },
  };
}

// Formatting utilities
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(num));
}

export function formatPercentage(num: number, decimals: number = 1): string {
  return `${num.toFixed(decimals)}%`;
}

export function formatPercentagePoints(
  num: number,
  decimals: number = 1
): string {
  const sign = num >= 0 ? "+" : "";
  return `${sign}${num.toFixed(decimals)} ppts`;
}

export function formatRatio(ratio: number, decimals: number = 1): string {
  return `${ratio.toFixed(decimals)}:1`;
}
