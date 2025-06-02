import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PropertyCardSkeleton() {
  return (
    <Card className="bg-brand-cream border-brand-gold/30 overflow-hidden">
      <div className="relative h-64">
        <Skeleton className="absolute inset-0" />
      </div>

      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        
        <div className="flex items-center mb-4">
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-32" />
        </div>
      </CardContent>
    </Card>
  )
} 