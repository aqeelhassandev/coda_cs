import React = require("react");
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className=" justify-center flex">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>
            Track progress and recent activity for your Vite app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Your design system is ready. Start building your next component.
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
