import { ChatInputProps } from "@/lib/types";

export default function ChatInput({ onSubmit, input, setInput }: ChatInputProps) {

    return (
        <form onSubmit={(e) => onSubmit(e)} className="p-1">
            <input
                name="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-md bg-neutral-200 dark:bg-neutral-800 p-1 text-[17px]"
                placeholder="Type something…"
            />
        </form>
    );
}