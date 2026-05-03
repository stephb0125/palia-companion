import { useState } from "react";

export default function QuestTracker() {
  const [quests, setQuests] = useState([
    { name: "Gather Wood", done: false },
    { name: "Find Copper Ore", done: false },
  ]);

  const toggleQuest = (index) => {
    const updated = [...quests];
    updated[index].done = !updated[index].done;
    setQuests(updated);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Quest Tracker</h2>

      {quests.map((q, i) => (
        <div key={i} className="flex justify-between border-b p-2">
          <span className={q.done ? "line-through" : ""}>{q.name}</span>
          <button onClick={() => toggleQuest(i)}>
            {q.done ? "Undo" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
}
