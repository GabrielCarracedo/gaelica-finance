'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, LabelList, LabelProps,
} from 'recharts'
import { PerfDataPoint } from './AIEnhancedPerformanceChart'

const COLORS = {
  turn: '#ab6363',
}

// Label customizado para mostrar só no último ponto
const OutsideLabel = (props: LabelProps & { lastIndex: number }) => {
  const { x, y, value, index, lastIndex } = props
  if (index !== lastIndex) return null
  return (
    <text
      x={x}
      y={typeof y === "number" ? y - 20 : 20}
      textAnchor="middle"
      fill="#fff"
      fontSize={12}
      fontWeight="bold"
      style={{ pointerEvents: 'none' }}
    >
      {value}d
    </text>
  )
}

export function TurnaroundChart({
  data,
  height = 400,
}: {
  data: PerfDataPoint[]
  height?: number
}) {
  const lastIndex = Array.isArray(data) ? data.length - 1 : 0
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 60, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
        <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
        <YAxis
          stroke="hsl(var(--foreground))"
          domain={[0, 20]}
          tick={{ fill: 'hsl(var(--foreground))' }}
        />
        <Tooltip
          formatter={(value: number) => [`${value}d`, "Turnaround"]}
        />
        <Legend verticalAlign="top" height={36} />

        <Line type="monotone" dataKey="turnaroundWithoutAI" name="Turnaround (No AI)"
              stroke={COLORS.turn} strokeDasharray="4 3" strokeOpacity={0.5} dot={false} />
        <Line type="monotone" dataKey="turnaroundWithDelphion" name="Turnaround (Delphion)"
              stroke={COLORS.turn} dot={{ r: 3 }}>
          <LabelList
            dataKey="turnaroundWithDelphion"
            content={(props) => <OutsideLabel {...props} lastIndex={lastIndex} />}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  )
}
