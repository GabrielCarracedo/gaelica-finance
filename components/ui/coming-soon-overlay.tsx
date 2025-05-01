"use client"

interface ComingSoonOverlayProps {
  message?: string
  date?: string
  blurAmount?: string
}

export function ComingSoonOverlay({ 
  message = "Coming Soon", 
  date = "Q3 2024",
  blurAmount = "backdrop-blur-[1px]" 
}: ComingSoonOverlayProps) {
  return (
    <div className={`absolute inset-0 bg-background/90 ${blurAmount} flex items-center justify-center z-10`}>
      <div className="flex flex-col items-center gap-2">
        <div className="text-muted-foreground/80 text-sm font-medium px-4 py-2 rounded-full border border-border/30 bg-muted/5">
          {message} • {date}
        </div>
      </div>
    </div>
  );
} 