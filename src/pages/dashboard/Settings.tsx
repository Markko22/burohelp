import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Settings() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add your settings content here */}
        </CardContent>
      </Card>
    </div>
  );
}