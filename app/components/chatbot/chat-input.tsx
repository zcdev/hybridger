import { ChatInputProps } from "./types";

export default function ChatInput({ onSubmit, input, setInput }: ChatInputProps) {

    return (
        <form onSubmit={(event) => onSubmit(event)} className="p-1">
            <input
                name="user-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="w-full rounded-md bg-neutral-200 dark:bg-neutral-800 p-1 text-[17px]"
                placeholder="Type something…"
            />
        </form>
    );
}