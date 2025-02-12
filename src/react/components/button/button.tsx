import { cn } from "@/utils/cn"
import { Component } from "@/utils/type"
import type { ButtonProps } from "./button.type"

export const Button: Component<ButtonProps> = ({ active, onClick, text, className }) => {
  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-lg border-2 border-typo-white hover:bg-button cursor-pointer group",
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
