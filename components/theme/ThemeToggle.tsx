"use client"

import * as React from "react"
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const themeOptions = [
    { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> }
  ]

  // Ensure component is mounted before rendering theme-specific content
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Default to system theme if not mounted yet
  const currentTheme = mounted && theme ? 
    themeOptions.find(option => option.value === theme) || themeOptions[2] : 
    themeOptions[2]

  // Click outside handler
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-2 py-1 border border-border bg-background shadow hover:shadow-md transition-all duration-300 flex items-center space-x-1 group"
        >
          <span className="text-yellow-500 dark:text-foreground">
            <Monitor className="w-4 h-4" />
          </span>
          <span className="text-xs text-foreground">
            System
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </Button>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg px-2 py-1 border border-border bg-background shadow hover:shadow-md transition-all duration-300 flex items-center space-x-1 group"
      >
        <span className="text-yellow-500 dark:text-foreground">
          {currentTheme.icon}
        </span>
        <span className="text-xs text-foreground">
          {currentTheme.label}
        </span>
        <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value)
                setIsOpen(false)
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-muted transition-colors duration-200 ${
                theme === option.value 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground'
              }`}
            >
              <span className={theme === option.value ? 'text-primary' : 'text-muted-foreground'}>
                {option.icon}
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 