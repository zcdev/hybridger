import { Message } from "../../../lib/types";

export default function MessageBubble({ from, text }: Message) {
    const isBot = from === "bot";

    return (
        <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
            <div
                className={`px-3 py-2 rounded-lg max-w-[75%] ${isBot
                    ? "bg-neutral-200 dark:bg-neutral-700"
                    : "bg-indigo-600 text-white"}`}>
                {text}
            </div>
        </div>
    );
};
