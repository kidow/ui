"use client";

import { PromptInputBox } from "@/components/kidow/ai-prompt-box";

export default function AiPromptBoxDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center">
      <PromptInputBox
        onSend={(message, files) => {
          console.log("Message:", message);
          console.log("Files:", files);
        }}
        placeholder="Ask me anything..."
      />
    </div>
  );
}
