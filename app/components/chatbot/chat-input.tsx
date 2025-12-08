import { ChatInputProps } from "@/lib/types";

export default function ChatInput({ onSubmit, input, setInput }: ChatInputProps) {

    return (
        <form onSubmit={(e) => onSubmit(e)} className="p-3 border-t dark:border-neutral-700">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-md bg-neutral-200 dark:bg-neutral-800 p-2 text-sm"
                placeholder="Type something…"
            />
        </form>
    );
}