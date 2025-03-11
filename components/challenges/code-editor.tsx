"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"

interface CodeEditorProps {
  initialCode: string
  language: string
}

export function CodeEditor({ initialCode, language }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const runCode = () => {
    setIsRunning(true)
    setOutput("Running code...")

    // Simulate code execution with a delay
    setTimeout(() => {
      if (language === "python") {
        setOutput("Output:\n[1, 4, 9, 16, 25]\n\nExecution completed successfully.")
      } else if (language === "javascript") {
        setOutput("Output:\n[1, 4, 9, 16, 25]\n\nExecution completed successfully.")
      } else {
        setOutput("Code execution simulated. In a real environment, your code would be executed here.")
      }
      setIsRunning(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div className="absolute right-2 top-2 z-10">
          <Button size="sm" onClick={runCode} disabled={isRunning} className="gap-1">
            <PlayIcon className="h-4 w-4" />
            Run
          </Button>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="h-[300px] w-full resize-none rounded-md border border-input bg-background p-3 font-mono text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          spellCheck="false"
        />
      </div>

      {output && (
        <div className="rounded-md border bg-muted p-3">
          <p className="font-medium text-sm mb-1">Output:</p>
          <pre className="text-xs whitespace-pre-wrap font-mono">{output}</pre>
        </div>
      )}
    </div>
  )
}

