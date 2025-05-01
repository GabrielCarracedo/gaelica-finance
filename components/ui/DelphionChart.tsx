'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

// Definição do tipo dos dados
interface DataPoint {
  year: string
  successWithoutAI: number
  successWithDelphion: number
  roiWithoutAI: number
  roiWithDelphion: number
}

// Dados padrão do gráfico
const defaultData: DataPoint[] = [
  {
    year: '2020',
    successWithoutAI: 68,
    successWithDelphion: 70,
    roiWithoutAI: 12,
    roiWithDelphion: 13,
  },
  {
    year: '2021',
    successWithoutAI: 69,
    successWithDelphion: 73,
    roiWithoutAI: 12.5,
    roiWithDelphion: 14,
  },
  {
    year: '2022',
    successWithoutAI: 70,
    successWithDelphion: 76,
    roiWithoutAI: 13,
    roiWithDelphion: 15.2,
  },
  {
    year: '2023',
    successWithoutAI: 71,
    successWithDelphion: 79,
    roiWithoutAI: 13.5,
    roiWithDelphion: 16.3,
  },
  {
    year: '2024',
    successWithoutAI: 72,
    successWithDelphion: 82,
    roiWithoutAI: 14,
    roiWithDelphion: 17.2,
  },
  {
    year: '2025',
    successWithoutAI: 73,
    successWithDelphion: 84,
    roiWithoutAI: 15,
    roiWithDelphion: 18,
  },
]

// Interface das props do componente
interface DelphionChartProps {
  data?: DataPoint[]
  height?: number
  showROI?: boolean
  className?: string
}

export function DelphionChart({
  data = defaultData,
  height = 300,
  showROI = true,
  className = '',
}: DelphionChartProps) {
  // Tratamento de erro para dados vazios
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-muted-foreground">
        No data available
      </div>
    )
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height} aspect={16/9}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          aria-label="Performance comparison chart"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--muted))"
            opacity={0.5}
          />
          
          <XAxis
            dataKey="year"
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          
          <YAxis
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            labelStyle={{
              color: 'hsl(var(--foreground))',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}
            itemStyle={{ padding: '0.25rem 0' }}
            formatter={(value: number, name: string) => [
              name.includes('ROI') ? `${value}%` : `${value}`,
              name
            ]}
          />
          
          <Legend
            wrapperStyle={{
              paddingTop: '1rem',
              color: 'hsl(var(--foreground))'
            }}
          />

          {/* Linhas de Sucesso */}
          <Line
            type="monotone"
            dataKey="successWithoutAI"
            name="Success (No AI)"
            stroke="#9ca3af"
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="successWithDelphion"
            name="Success (Delphion)"
            stroke="#4ade80"
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />

          {/* Linhas de ROI (condicionais) */}
          {showROI && (
            <>
              <Line
                type="monotone"
                dataKey="roiWithoutAI"
                name="ROI (No AI)"
                stroke="#facc15"
                strokeDasharray="4 2"
                strokeWidth={2}
                dot={{ strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="roiWithDelphion"
                name="ROI (Delphion)"
                stroke="#f97316"
                strokeDasharray="4 2"
                strokeWidth={2}
                dot={{ strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
