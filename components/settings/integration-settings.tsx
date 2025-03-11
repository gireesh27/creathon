"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function IntegrationSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Integrations</h2>
        <p className="text-sm text-muted-foreground">
          Connect third-party services and tools to enhance your experience.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">API Access</h3>
          <p className="text-sm text-muted-foreground">Manage your API keys and access tokens.</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-medium">API Key</h4>
                <p className="text-sm text-muted-foreground">Use this key to authenticate API requests.</p>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="password"
                  value="sk_test_51NzUBtKGj4Lk5Jh2X9Yp3Lm4Vn5Bq6Cr7Ds8Et9Fu0Gv1Hw2Ix3Jy4Kz5"
                  readOnly
                  className="w-full sm:w-auto"
                />
                <Button variant="outline" size="sm">
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  Regenerate
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="api-access" className="flex flex-col space-y-1">
              <span>Enable API Access</span>
              <span className="font-normal text-sm text-muted-foreground">
                Allow external applications to access your data via API.
              </span>
            </Label>
            <Switch id="api-access" defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Connected Services</h3>
          <p className="text-sm text-muted-foreground">Manage third-party services connected to your account.</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Telegram Bot</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Connected
                    </Badge>
                    <span className="text-sm text-muted-foreground">Last synced: 2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Configure
                </Button>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24292e]">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Connected
                    </Badge>
                    <span className="text-sm text-muted-foreground">Last synced: 1 day ago</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Configure
                </Button>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5865F2]">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Discord</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Not Connected
                    </Badge>
                  </div>
                </div>
              </div>
              <Button size="sm">Connect</Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Webhooks</h3>
          <p className="text-sm text-muted-foreground">Configure webhooks to receive real-time updates.</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Challenge Completion Webhook</h4>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="webhook-url"
                    placeholder="https://example.com/webhook"
                    defaultValue="https://myapp.com/api/webhooks/challenges"
                    className="flex-1"
                  />
                  <Button variant="outline">Test</Button>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline">Add New Webhook</Button>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

