import { useState } from "react";
import QuestTracker from "./components/QuestTracker";
import ResourceFinder from "./components/ResourceFinder";
import AIChat from "./components/AIChat";

export default function App() {
  const [tab, setTab] = useState("quests");

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        🌿 Palia Companion
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setTab("quests")}>Quests</button>
        <button onClick={() => setTab("resources")}>Resources</button>
        <button onClick={() => setTab("ai")}>AI Helper</button>
      </div>

      {tab === "quests" && <QuestTracker />}
      {tab === "resources" && <ResourceFinder />}
      {tab === "ai" && <AIChat />}
    </div>
  );
}