'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, LabelList, LabelProps,
  ReferenceArea,
} from 'recharts'
import {
  Tooltip as RadixTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProps } from 'recharts';

export interface PerfDataPoint {
  year: string
  successWithoutAI: number
  successWithDelphion: number
  roiWithoutAI: number
  roiWithDelphion: number
  failedWithoutAI: number
  failedWithDelphion: number
  accuracyWithoutAI: number
  accuracyWithDelphion: number
  timeToInsightWithoutAI: number  // alterado de turnaroundWithoutAI
  timeToInsightWithDelphion: number  // alterado de turnaroundWithDelphion
}

export const defaultData: PerfDataPoint[] = [
  {
    year: '2020',
    successWithoutAI: 68,
    successWithDelphion: 84,
    roiWithoutAI: 12,
    roiWithDelphion: 18,
    failedWithoutAI: 23,
    failedWithDelphion: 11,
    accuracyWithoutAI: 72,
    accuracyWithDelphion: 91,
    timeToInsightWithoutAI: 14,
    timeToInsightWithDelphion: 3,
  },
  {
    year: '2021',
    successWithoutAI: 69,
    successWithDelphion: 80,
    roiWithoutAI: 13,
    roiWithDelphion: 15,
    failedWithoutAI: 22,
    failedWithDelphion: 14,
    accuracyWithoutAI: 74,
    accuracyWithDelphion: 88,
    timeToInsightWithoutAI: 13,
    timeToInsightWithDelphion: 5,
  },
  {
    year: '2022',
    successWithoutAI: 70,
    successWithDelphion: 83,
    roiWithoutAI: 14,
    roiWithDelphion: 19,
    failedWithoutAI: 21,
    failedWithDelphion: 12,
    accuracyWithoutAI: 76,
    accuracyWithDelphion: 92,
    timeToInsightWithoutAI: 12,
    timeToInsightWithDelphion: 4,
  },
  {
    year: '2023',
    successWithoutAI: 71,
    successWithDelphion: 88,
    roiWithoutAI: 15,
    roiWithDelphion: 25,
    failedWithoutAI: 20,
    failedWithDelphion: 8,
    accuracyWithoutAI: 77,
    accuracyWithDelphion: 95,
    timeToInsightWithoutAI: 10,
    timeToInsightWithDelphion: 2,
  },
  {
    year: '2024',
    successWithoutAI: 72,
    successWithDelphion: 92,
    roiWithoutAI: 16,
    roiWithDelphion: 32,
    failedWithoutAI: 19,
    failedWithDelphion: 5,
    accuracyWithoutAI: 79,
    accuracyWithDelphion: 97,
    timeToInsightWithoutAI: 9,
    timeToInsightWithDelphion: 1.5,
  },
  {
    year: '2025',
    successWithoutAI: 73,
    successWithDelphion: 95,
    roiWithoutAI: 17,
    roiWithDelphion: 40,
    failedWithoutAI: 18,
    failedWithDelphion: 3,
    accuracyWithoutAI: 80,
    accuracyWithDelphion: 99,
    timeToInsightWithoutAI: 8,
    timeToInsightWithDelphion: 1,
  },
  {
    year: '2026',
    successWithoutAI: 74,
    successWithDelphion: 96,
    roiWithoutAI: 18,
    roiWithDelphion: 49,
    failedWithoutAI: 17,
    failedWithDelphion: 2,
    accuracyWithoutAI: 81,
    accuracyWithDelphion: 99.5,
    timeToInsightWithoutAI: 7,
    timeToInsightWithDelphion: 1,
  },
  {
    year: '2027',
    successWithoutAI: 75,
    successWithDelphion: 97,
    roiWithoutAI: 19,
    roiWithDelphion: 60,
    failedWithoutAI: 16,
    failedWithDelphion: 1,
    accuracyWithoutAI: 82,
    accuracyWithDelphion: 99.8,
    timeToInsightWithoutAI: 6,
    timeToInsightWithDelphion: 1,
  }
]

const COLORS = {
  success: '#60a5fa',   // azul claro
  roi:     '#f472b6',   // rosa
  failed:  '#047857',   // verde escuro
  accuracy:'#fde68a',   // amarelo claro
}

const METRIC_ORDER = [
  'Forecast Acc. With AI',
  'Forecast Acc. No AI',
  'Success Rate (With AI)',
  'Success Rate (No AI)',
  'Avg ROI (With AI)',
  'Avg ROI (No AI)',
  'Failed (%) With AI',
  'Failed (%) No AI',
];

const METRIC_COLORS: Record<string, string> = {
  'Forecast Acc. With AI': COLORS.accuracy,
  'Forecast Acc. No AI': COLORS.accuracy,
  'Success Rate (With AI)': COLORS.success,
  'Success Rate (No AI)': COLORS.success,
  'Avg ROI (With AI)': COLORS.roi,
  'Avg ROI (No AI)': COLORS.roi,
  'Failed (%) With AI': COLORS.failed,
  'Failed (%) No AI': COLORS.failed,
};

// Label customizado para mostrar só no último ponto
const OutsideLabel = (props: LabelProps & { lastIndex: number }) => {
  const { x, y, value, index, lastIndex } = props
  if (index !== lastIndex) return null
  return (
    <text
      x={x}
      y={typeof y === "number" ? y - 35 : 10}
      textAnchor="middle"
      fill="#fff"
      fontSize={12}
      fontWeight="bold"
      style={{ pointerEvents: 'none' }}
    >
      {value}
    </text>
  )
}

function CustomTooltip({ active, payload }: TooltipProps<any, any>) {
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

  // Para cada par, coloca o maior em cima
  const grouped: any[] = [];
  for (let i = 0; i < ordered.length; i += 2) {
    const a = ordered[i];
    const b = ordered[i + 1];
    if (a && b) {
      if (a.value >= b.value) {
        grouped.push(a, b);
      } else {
        grouped.push(b, a);
      }
    } else if (a) {
      grouped.push(a);
    } else if (b) {
      grouped.push(b);
    }
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
      {grouped.map((item, idx) => (
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
            {typeof item.value === 'number' ? `${item.value}%` : item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AIEnhancedPerformanceChart({
  data = defaultData,
  height = 400,
}: {
  data?: PerfDataPoint[]
  height?: number
}) {
  const lastIndex = Array.isArray(data) ? data.length - 1 : 0
  const last = data[data.length - 1]

  const metricDescriptions: Record<string, string> = {
    'Success Rate': 'Percentage of AI-led strategic initiatives that met or exceeded their objectives, measured per project.',
    'Avg ROI': 'Mean return on investment achieved by each AI-enabled project, expressed as a percentage of initial spend.',
    'Failed (%)': 'Proportion of AI pilot projects that underperformed or did not deliver the expected outcomes.',
    'Forecast Acc.': 'Average precision of AI-generated predictions versus actual results, expressed as a percentage.',
    'Time to Insight': 'Average elapsed time (in days) from data input to delivery of actionable scenario analysis by an AI project.'
  }

  const externalLabels = [
    {
      label: 'Success Rate (With AI)',
      baseLabel: 'Success Rate',
      color: COLORS.success,
    },
    {
      label: 'Avg ROI (With AI)',
      baseLabel: 'Avg ROI',
      color: COLORS.roi,
    },
    {
      label: 'Failed (%) With AI',
      baseLabel: 'Failed (%)',
      color: COLORS.failed,
    },
    {
      label: 'Forecast Acc. With AI',
      baseLabel: 'Forecast Acc.',
      color: COLORS.accuracy,
    },
  ]

  return (
    <TooltipProvider delayDuration={300}>
      <>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '0.25rem',
          flexWrap: 'wrap'
        }}>
          {externalLabels.map((item) => (
            <RadixTooltip key={item.label}>
              <TooltipTrigger>
                <span 
                  style={{
                    color: item.color,
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    cursor: 'help'
                  }}
                >
                  {item.label}
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[300px] text-sm">
                <p>{metricDescriptions[item.baseLabel]}</p>
              </TooltipContent>
            </RadixTooltip>
          ))}
        </div>

        {/* Legenda de tipos de linha */}
        <div className="flex items-center justify-center gap-6 mb-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-foreground"></div>
            <span>With AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-foreground opacity-50" style={{ 
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
              domain={[0, 110]}
              tick={{ 
                fill: 'hsl(var(--foreground))',
                fontSize: 10
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
            />

            {/* Sucesso */}
            <Line type="monotone" dataKey="successWithoutAI" name="Success Rate (No AI)"
                  stroke={COLORS.success} strokeDasharray="4 3" strokeOpacity={0.5} dot={false} />
            <Line type="monotone" dataKey="successWithDelphion" name="Success Rate (With AI)"
                  stroke={COLORS.success} dot={{ r: 3 }}>
              <LabelList
                dataKey="successWithDelphion"
                position="bottom"
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 10 }}
              />
            </Line>

            {/* ROI */}
            <Line type="monotone" dataKey="roiWithoutAI" name="Avg ROI (No AI)"
                  stroke={COLORS.roi} strokeDasharray="4 3" strokeOpacity={0.5} dot={false} />
            <Line type="monotone" dataKey="roiWithDelphion" name="Avg ROI (With AI)"
                  stroke={COLORS.roi} dot={{ r: 3 }}>
              <LabelList
                dataKey="roiWithDelphion"
                position="top"
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 10 }}
              />
            </Line>

            {/* Failed */}
            <Line type="monotone" dataKey="failedWithoutAI" name="Failed (%) No AI"
                  stroke={COLORS.failed} strokeDasharray="4 3" strokeOpacity={0.5} dot={false} />
            <Line type="monotone" dataKey="failedWithDelphion" name="Failed (%) With AI"
                  stroke={COLORS.failed} dot={{ r: 3 }}>
              <LabelList
                dataKey="failedWithDelphion"
                position="top"
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 10 }}
              />
            </Line>

            {/* Accuracy */}
            <Line type="monotone" dataKey="accuracyWithoutAI" name="Forecast Acc. No AI"
                  stroke={COLORS.accuracy} strokeDasharray="4 3" strokeOpacity={0.5} dot={false} />
            <Line type="monotone" dataKey="accuracyWithDelphion" name="Forecast Acc. With AI"
                  stroke={COLORS.accuracy} dot={{ r: 3 }}>
              <LabelList
                dataKey="accuracyWithDelphion"
                position="top"
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 10 }}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </>
    </TooltipProvider>
  )
}
