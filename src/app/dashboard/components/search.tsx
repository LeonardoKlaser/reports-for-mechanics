"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export function Search() {
    const [isExpanded, setIsExpanded] = useState(false)
  
    return (
      <div className="flex items-center">
        {isExpanded ? (
          <Input type="search" placeholder="Pesquisar..." className="w-[200px] md:w-[300px]" />
        ) : (
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsExpanded(true)}>
            <SearchIcon className="h-5 w-5" />
          </Button>
        )}
        <div className="hidden md:block">
          <Input type="search" placeholder="Pesquisar..." className="w-[300px]" />
        </div>
      </div>
    )
  }

