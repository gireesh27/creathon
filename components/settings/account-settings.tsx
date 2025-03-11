"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

export function AccountSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your account settings and security preferences.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-sm text-muted-foreground">Update your password to keep your account secure.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <div className="font-medium">Two-Factor Authentication</div>
            <div className="text-sm text-muted-foreground">
              Protect your account with an additional verification step.
            </div>
          </div>
          <Switch />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Connected Accounts</h3>
          <p className="text-sm text-muted-foreground">Manage accounts connected to your profile.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4285F4]">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">Google</div>
                <div className="text-sm text-muted-foreground">Connected to john.doe@gmail.com</div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2]">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">Twitter</div>
                <div className="text-sm text-muted-foreground">Not connected</div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Connect
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24292e]">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-muted-foreground">Connected to johndoe</div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
          <p className="text-sm text-muted-foreground">Permanently delete your account and all of your content.</p>
        </div>

        <Alert variant="destructive">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDescription>
        </Alert>

        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  )
}

