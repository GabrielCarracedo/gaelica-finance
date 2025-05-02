'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, LabelList, LabelProps,
  ReferenceArea,
} from 'recharts'
import { PerfDataPoint } from './AIEnhancedPerformanceChart'
import {
  Tooltip as RadixTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Tooltip as RechartsTooltip, TooltipProps } from 'recharts'

const COLORS = {
  turn: '#ab6363',
  success: '#34d399',
  roi: '#f59e0b',
  failed: '#ef4444',
  accuracy: '#8b5cf6',
}

const METRIC_ORDER = [
  'Time to Insight (With AI)',
  'Time to Insight (No AI)',
]

const METRIC_COLORS: Record<string, string> = {
  'Time to Insight (With AI)': COLORS.turn,
  'Time to Insight (No AI)': COLORS.turn,
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

function CustomTimeToInsightTooltip({ active, payload }: TooltipProps<any, any>) {
  if (!active || !payload || !payload.length) return null;

  // Cria um map para fácil acesso
  const payloadMap: Record<string, any> = {};
  payload.forEach(item => {
    if (item && item.name) payloadMap[item.name] = item;
  });

  // Ordena conforme a ordem visual do gráfico
  const ordered: any[] = [];
  for (const metric of METRIC_ORDER) {
    if (payloadMap[metric]) {
      ordered.push(payloadMap[metric]);
    }
  }

  // Para o par, coloca o maior em cima
  let grouped: any[] = [];
  if (ordered.length === 2) {
    const [a, b] = ordered;
    grouped = a.value >= b.value ? [a, b] : [b, a];
  } else {
    grouped = ordered;
  }

  return (
    <div
      style={{
        backgroundColor: 'hsl(var(--muted))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '0.5rem',
        padding: '0.75rem',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        opacity: 0.95,
        fontSize: '12px',
      }}
    >
      {grouped.map((item) => (
        <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <span
            style={{
              color: METRIC_COLORS[item.name] || 'inherit',
              fontSize: '11px',
              minWidth: 120,
              marginRight: 6,
              fontWeight: 500,
              opacity: 0.95,
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              color: METRIC_COLORS[item.name] || 'inherit',
              fontWeight: 'bold',
              fontSize: '12px',
              opacity: 0.95,
            }}
          >
            {typeof item.value === 'number' ? `${item.value}d` : item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TimeToInsightChart({
  data,
  height = 400,
}: {
  data: PerfDataPoint[]
  height?: number
}) {
  const lastIndex = Array.isArray(data) ? data.length - 1 : 0
  
  const metricDescription = {
    'Time to Insight': 'Average elapsed time (in days) from data input to delivery of actionable scenario analysis by an AI project.'
  }

  return (
    <TooltipProvider delayDuration={300}>
      <>
        {/* Legenda principal com tooltip */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '0.25rem',
          flexWrap: 'wrap'
        }}>
          <RadixTooltip>
            <TooltipTrigger>
              <span style={{
                color: COLORS.turn,
                fontWeight: 'bold',
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
                cursor: 'help'
              }}>
                Time to Insight (With AI)
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[300px] text-sm">
              <p>{metricDescription['Time to Insight']}</p>
            </TooltipContent>
          </RadixTooltip>
        </div>

        {/* Legenda de tipos de linha */}
        <div className="flex items-center justify-center gap-6 mb-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px]" style={{ backgroundColor: COLORS.turn }}></div>
            <span>With AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] opacity-50" style={{ 
              backgroundColor: COLORS.turn,
              backgroundImage: 'linear-gradient(to right, currentColor 50%, transparent 50%)',
              backgroundSize: '8px 100%'
            }}></div>
            <span>Without AI</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <pattern id="projectionPattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Área sombreada para anos projetados */}
            <ReferenceArea
              x1="2025"
              x2="2027"
              fill="url(#projectionPattern)"
              fillOpacity={0.3}
              strokeOpacity={0}
            />
            <ReferenceArea
              x1="2025"
              x2="2027"
              fill="hsl(var(--muted))"
              fillOpacity={0.2}
              strokeOpacity={0}
            />

            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--foreground))"
              tick={{ 
                fill: 'hsl(var(--foreground))',
                fontSize: 10
              }}
            />
            <YAxis
              stroke="hsl(var(--foreground))"
              domain={[0, 20]}
              tick={{ 
                fill: 'hsl(var(--foreground))',
                fontSize: 10
              }}
            />
            <RechartsTooltip content={<CustomTimeToInsightTooltip />} />

            <Line
              type="monotone"
              dataKey="timeToInsightWithDelphion"
              name="Time to Insight (With AI)"
              stroke={COLORS.turn}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="timeToInsightWithoutAI"
              name="Time to Insight (No AI)"
              stroke={COLORS.turn}
              strokeDasharray="4 3"
              strokeOpacity={0.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    </TooltipProvider>
  )
} 