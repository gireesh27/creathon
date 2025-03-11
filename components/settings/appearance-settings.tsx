"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, LaptopIcon, CheckIcon } from "lucide-react"

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState(16)
  const [codeEditorTheme, setCodeEditorTheme] = useState("system")

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Appearance Settings</h2>
        <p className="text-sm text-muted-foreground">Customize how the platform looks and feels.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Theme</h3>
          <p className="text-sm text-muted-foreground">Select a theme for the platform.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 hover:bg-accent ${
              theme === "light" ? "border-primary bg-accent" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <div className="mb-2 rounded-full bg-white p-2 text-black">
              <SunIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Light</span>
            {theme === "light" && <CheckIcon className="absolute right-2 top-2 h-4 w-4 text-primary" />}
          </div>

          <div
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 hover:bg-accent ${
              theme === "dark" ? "border-primary bg-accent" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <div className="mb-2 rounded-full bg-slate-950 p-2 text-white">
              <MoonIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">Dark</span>
            {theme === "dark" && <CheckIcon className="absolute right-2 top-2 h-4 w-4 text-primary" />}
          </div>

          <div
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 hover:bg-accent ${
              theme === "system" ? "border-primary bg-accent" : ""
            }`}
            onClick={() => setTheme("system")}
          >
            <div className="mb-2 rounded-full bg-gradient-to-r from-white to-slate-950 p-2 text-black">
              <LaptopIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">System</span>
            {theme === "system" && <CheckIcon className="absolute right-2 top-2 h-4 w-4 text-primary" />}
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Font Size</h3>
          <p className="text-sm text-muted-foreground">Adjust the font size for better readability.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Small</span>
            <span className="text-sm font-medium">{fontSize}px</span>
            <span className="text-sm">Large</span>
          </div>
          <Slider defaultValue={[16]} min={12} max={20} step={1} onValueChange={(value) => setFontSize(value[0])} />
          <div className="rounded-md border p-4">
            <p style={{ fontSize: `${fontSize}px` }}>
              This is a preview of how text will appear with the selected font size.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Code Editor</h3>
          <p className="text-sm text-muted-foreground">Customize your code editor experience.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="code-line-numbers" className="flex flex-col space-y-1">
              <span>Show Line Numbers</span>
              <span className="font-normal text-sm text-muted-foreground">
                Display line numbers in the code editor.
              </span>
            </Label>
            <Switch id="code-line-numbers" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="code-wrap" className="flex flex-col space-y-1">
              <span>Word Wrap</span>
              <span className="font-normal text-sm text-muted-foreground">
                Wrap long lines of code to fit within the editor.
              </span>
            </Label>
            <Switch id="code-wrap" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label>Code Editor Theme</Label>
            <RadioGroup value={codeEditorTheme} onValueChange={setCodeEditorTheme}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system-theme" />
                <Label htmlFor="system-theme">Follow System Theme</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light-theme" />
                <Label htmlFor="light-theme">Light Theme</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark-theme" />
                <Label htmlFor="dark-theme">Dark Theme</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monokai" id="monokai-theme" />
                <Label htmlFor="monokai-theme">Monokai</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

