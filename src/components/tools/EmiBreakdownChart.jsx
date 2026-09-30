"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatINR } from "@/lib/finance/format";

export const CHART_COLORS = { principal: "#1D4ED8", interest: "#FBBF24" };

export default function EmiBreakdownChart({ principal, interest }) {
  const data = [
    { name: "Principal", value: principal, color: CHART_COLORS.principal },
    { name: "Interest", value: Math.max(interest, 0), color: CHART_COLORS.interest },
  ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="90%" paddingAngle={2} stroke="none" isAnimationActive={false}>
          {data.map((d) => (
            <Cell key={d.name} fill={d.color} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => formatINR(v)} />
      </PieChart>
    </ResponsiveContainer>
  );
}
