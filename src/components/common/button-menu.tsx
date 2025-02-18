import { cn } from "@/lib/utils"
import { useState } from "react"

export function ButtonMenu() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div className={cn(isActive && "")}></div>
    </div>
  )
}
