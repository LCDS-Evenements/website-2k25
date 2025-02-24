import { cn } from "@/utils/cn"
import { Component } from "@/utils/type"
import type { ButtonProps } from "./button.type"

export const Button: Component<ButtonProps> = ({ active, onClick, text, className }) => {
  return (
    <button 
      className={cn(
        "py-1 px-3 sm:py-2 sm:px-4 rounded-lg border-2 border-typo-white hover:bg-button cursor-pointer group",
        active && "bg-button",
        className
      )} 
      onClick={onClick}
    >
      <span className={cn("font-bold text-base text-typo-white group-hover:text-typo-black", active && "text-typo-black")}>
        {text}
      </span>
    </button>
  )
}
