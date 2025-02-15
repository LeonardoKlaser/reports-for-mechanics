import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentReports() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Toyota Camry</p>
          <p className="text-sm text-muted-foreground">Oil change and brake inspection</p>
        </div>
        <div className="ml-auto font-medium">+$180.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ford F-150</p>
          <p className="text-sm text-muted-foreground">Transmission service</p>
        </div>
        <div className="ml-auto font-medium">+$350.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>HC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Honda Civic</p>
          <p className="text-sm text-muted-foreground">Tire rotation and alignment</p>
        </div>
        <div className="ml-auto font-medium">+$120.00</div>
      </div>
    </div>
  )
}

