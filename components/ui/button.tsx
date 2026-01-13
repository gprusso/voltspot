import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Variants
          {
            // Default - VOLTSPOT Blue
            "bg-voltspot-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl": 
              variant === 'default',
            
            // Destructive - Red
            "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl": 
              variant === 'destructive',
            
            // Outline - VOLTSPOT Blue border
            "border-2 border-voltspot-blue text-voltspot-blue bg-transparent hover:bg-blue-50": 
              variant === 'outline',
            
            // Secondary - VOLTSPOT Green
            "bg-voltspot-green text-white hover:bg-green-700 shadow-lg hover:shadow-xl": 
              variant === 'secondary',
            
            // Ghost - Transparent
            "hover:bg-gray-100 text-gray-900": 
              variant === 'ghost',
            
            // Link - Text only
            "text-voltspot-blue underline-offset-4 hover:underline": 
              variant === 'link',
          },
          
          // Sizes
          {
            "h-10 px-4 py-2": size === 'default',
            "h-9 rounded-md px-3": size === 'sm',
            "h-11 rounded-md px-8": size === 'lg',
            "h-10 w-10": size === 'icon',
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
