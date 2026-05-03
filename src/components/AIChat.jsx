import { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, { role: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I can help with Palia quests and resources! (API can be added later)",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">AI Helper</h2>

      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((m, i) => (
          <p key={i} className={m.role === "user" ? "text-blue-600" : "text-green-600"}>
            {m.text}
          </p>
        ))}
      </div>

      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={sendMessage} className="mt-2 bg-green-500 text-white p-2 w-full">
        Send
      </button>
    </div>
  );
}
