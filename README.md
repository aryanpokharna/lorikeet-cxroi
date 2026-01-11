# Lorikeet CX ROI Calculator

An interactive ROI calculator that demonstrates the financial impact of switching from pay-per-ticket AI solutions or human support teams to Lorikeet's pay-per-resolution model.

## Project Purpose

This calculator serves as a strategic tool to help potential customers understand the cost savings and efficiency gains of using Lorikeet for customer experience (CX) operations. The page allows users to:

- Compare Lorikeet's pricing model against pay-per-ticket AI solutions
- Compare Lorikeet's pricing model against human support teams
- Calculate potential annual savings based on their specific metrics
- See real-world proof through case studies

### Design Alignment Context

**Important Note:** This page was originally AI-generated and had design inconsistencies with the main Lorikeet landing page and brand guidelines. The current implementation represents an effort to align the calculator with Lorikeet's high-quality brand standards while maintaining its effectiveness as a financial demonstration tool.

The goal is to ensure that this calculator page reflects the same level of polish, attention to detail, and brand consistency as the main Lorikeet website, rather than appearing as a separate, lower-quality tool.

---

## How the Calculator Works

### Calculation Methodology

The calculator supports two baseline comparison modes:

#### 1. Pay-Per-Ticket AI Baseline

**Inputs:**

- Tickets per month
- Cost per ticket (from competitor AI solution)
- Percentage of tickets solvable by AI

**Calculations:**

- **Pay-per-ticket monthly cost:** `ticketsPerMonth × costPerTicket`
- **Tickets resolved:** `ticketsPerMonth × (ticketsSolvableByAI / 100)`
- **Tickets failed:** `ticketsPerMonth - ticketsResolved`
- **Cost per resolution:** `monthlyCost / ticketsResolved`

**Lorikeet Comparison:**

- Lorikeet only attempts tickets it's confident it can resolve
- Uses a 1.4:1 success ratio (resolved:failed)
- Charges **$0.75 per successful resolution**
- **Lorikeet tickets attempted:** `resolved + (resolved / 1.4)`
- **Lorikeet monthly cost:** `ticketsResolved × $0.75`

#### 2. Human Team Baseline

**Inputs:**

- Fully loaded cost per agent per year (salary + benefits)
- Utilization percentage (% of paid time spent on tickets)
- Average handle time per ticket (in minutes)
- Overhead/management percentage

**Calculations:**

**Step 1: Calculate tickets per month from human metrics**

- Assumes 40 hours/week per agent (2,080 hours/year)
- Available hours per month: `(2080 / 12) × (utilizationPercent / 100)`
- Available minutes per month: `availableHours × 60`
- **Tickets per agent per month:** `availableMinutes / handleTimeMinutes`

**Step 2: Calculate human team costs**

- Monthly cost per agent: `(fullyLoadedCostPerYear / 12) × (1 + overheadPercent / 100)`
- Cost per resolution: `monthlyCost / ticketsResolved`

**Step 3: Calculate AI-solvable tickets**

- Solvable tickets: `ticketsPerMonth × (ticketsSolvableByAI / 100)`

**Step 4: Calculate cost for AI-solvable tickets (man-hours saved)**

- Minutes for solvable tickets: `solvableTickets × handleTimeMinutes`
- Hours for solvable tickets: `minutes / 60`
- Agent fraction needed: `hoursForSolvableTickets / hoursPerMonthPerAgent`
- **Cost for solvable tickets:** `agentFraction × monthlyCost × (1 + overheadPercent)`

**Lorikeet Comparison:**

- Resolves the same number of AI-solvable tickets
- Charges **$0.75 per successful resolution**
- **Lorikeet monthly cost:** `solvableTickets × $0.75`

### Key Metrics Displayed

1. **Cost Reduction:** Percentage reduction in cost per resolution vs. baseline
2. **Annual Savings:** Total dollar amount saved per year
3. **Cost Per Resolution:** Direct comparison between Lorikeet and baseline
4. **Total Monthly Cost:** Overall monthly cost comparison

---

## Technical Architecture

### Technology Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI (for Switch component)
- **Icons:** Lucide React
- **TypeScript:** Full type safety throughout

### Project Structure

```
lorikeet-cxroi/
├── app/
│   ├── globals.css          # Global styles, animations, brand colors
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main calculator page
├── components/
│   ├── Calculator.tsx       # Main calculator component with inputs
│   ├── InputField.tsx       # Reusable input field with color variants
│   ├── Slider.tsx           # Percentage slider for AI-solvable tickets
│   ├── ResultsSummary.tsx   # Results display with stat cards
│   ├── CaseStudy.tsx        # Customer case study section
│   ├── Header.tsx           # Site header/navigation
│   ├── CTAFooter.tsx        # Call-to-action footer
│   └── AnimatedGuideLine.tsx # Animated vertical gradient line
├── lib/
│   └── calculator.ts        # Core calculation logic
└── public/
    ├── fonts/               # Custom brand fonts (PP Cirka, ABC Ginto)
    └── images/              # Brand assets and case study images
```

### Key Components

#### Calculator Component

- Manages all user inputs and state
- Conditionally renders inputs based on selected baseline
- Handles real-time calculation updates

#### InputField Component

- Supports multiple color variants (yellow, pink, green, orange, blue, purple)
- Each input box has a unique color-coded gradient background
- Handles number formatting with commas

#### Slider Component

- Interactive percentage slider for "tickets solvable by AI"
- Includes animated glow effect
- Displays helper text with calculated ticket counts

#### ResultsSummary Component

- Displays four key metrics in a grid layout
- Hover effects with glow on stat boxes
- Comparison cards show side-by-side Lorikeet vs. baseline costs

### Calculation Logic (`lib/calculator.ts`)

The `calculateROI()` function is the core of the calculator:

1. **Determines effective tickets per month** based on baseline type
2. **Calculates costs for each model** (pay-per-ticket, human, Lorikeet)
3. **Computes comparison metrics** (cost reduction, annual savings)
4. **Returns structured results** for display

Key assumptions:

- Lorikeet pricing: $0.75 per successful resolution
- Lorikeet success ratio: 1.4:1 (resolved:failed)
- Human agents: 40 hours/week, 2,080 hours/year
- Pay-per-ticket solutions: Attempt all tickets, only resolve AI-solvable ones

---

## Design Features

### Visual Elements

1. **Color-Coded Input Boxes:** Each input field has a unique gradient background color for visual distinction
2. **Animated Glow Effects:**
   - Toggle switch has animated gradient border
   - Slider has animated glow
   - Stat boxes have hover glow effects
3. **Gradient Backgrounds:** Yellow gradient backdrop on key sections
4. **Animated Text:** "resolution" text uses animated gradient effect
5. **Animated Guide Line:** Vertical gradient line connecting hero to calculator

### Brand Consistency

- Uses PP Cirka font for headlines (brand font)
- Uses ABC Ginto for body text
- Maintains black/white color scheme with colorful accents
- Follows Lorikeet brand guidelines for spacing and typography

---

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment

- Node.js 18+
- Next.js 14
- TypeScript 5.5+

---

## Future Improvements

### Design Alignment

- [ ] Further refine visual consistency with main Lorikeet site
- [ ] Ensure all animations match brand guidelines
- [ ] Optimize color palette to match brand standards exactly

### Functionality

- [ ] Add more granular calculation options
- [ ] Support multiple agents for human baseline
- [ ] Add export/share functionality for calculations
- [ ] Include more case studies or testimonials

### Performance

- [ ] Optimize font loading
- [ ] Lazy load case study images
- [ ] Add analytics tracking

---

## Notes

This calculator is designed to be a high-quality, brand-consistent tool that demonstrates Lorikeet's value proposition. The focus is on creating a polished experience that matches the quality of the main Lorikeet website while providing clear, actionable financial insights for potential customers.

---

## Version History

- **v0.1.0** - Initial implementation
  - Pay-per-ticket baseline comparison
  - Human team baseline comparison
  - Real-time calculation updates
  - Case study integration
  - Design alignment improvements

---

**Maintained by:** Aryan Pokharna
**Last Updated:** January 2025
