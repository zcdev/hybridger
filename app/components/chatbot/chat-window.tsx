import { useState, useRef, useEffect } from "react";
import { Message, ChatWindowProps } from "@/lib/types";
import ChatHeader from "./chat-header";
import Messages from "./messages";
import ChatInput from "./chat-input";
import OptionButtons from "./option-buttons";
import { chatScript } from "@/lib/chatscript";

export default function ChatWindow({ onClose }: ChatWindowProps) {

    const [step, setStep] = useState(0);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isThinking, setIsThinking] = useState(false);
    const [input, setInput] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    // Whenever messages change, auto-scroll
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages, isThinking]);

    const current = chatScript[step];

    // Script progression
    useEffect(() => {

        if (!current) return;

        if (current.from === "bot") {

            setIsThinking(true); // Show thinking bubble

            const timeDelay = setTimeout(() => {
                setMessages(prev => [...prev, { from: "bot", text: current.text }]); // Insert the bot message inside the timeout so React's Strict Mode
                // won't add it twice on the initial mount (cleanup cancels the first run).

                setIsThinking(false);
                setStep(prev => prev + 1);
            }, 2500);

            // Clean up function
            return () => clearTimeout(timeDelay);
        } else {
            // Stop and hold until user input
            setIsThinking(false);
        }
        // If it's a user-option step → UI waits for click

    }, [step]); // Run when step progresses

    // Unified user handler
    function handleUserResponse(userText: string) {
        setMessages(prev => [...prev, { from: "user", text: userText }]);
        setIsThinking(true);
        setStep(prev => prev + 1);
        setTimeout(() => {
            setIsThinking(false);
        }, 2500);
    }

    // Input submission
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim()) return;
        handleUserResponse(input.trim());
        setInput("");
        setIsThinking(true);
    }

    const isOptionStep = current?.from === "user-option";

    return (
        <div className="w-full min-w-[320px] max-w-[320px] h-auto max-h-[80vh] md:max-h-[600px] bg-white dark:bg-neutral-900 shadow-xl rounded-xl flex flex-col border border-gray-200">

            {/* Header */}
            <ChatHeader onClose={onClose} />

            {/* Messages */}
            <Messages messages={messages} ref={ref} isThinking={isThinking} />

            {/* Fake Input */}
            <div className="p-3 border-t">
                <div className="rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-500 text-sm p-2">
                    {/* Option buttons */}
                    {isOptionStep && (
                        <OptionButtons current={current} onClick={handleUserResponse} />
                    )}

                    {/* Input field */}
                    {!isOptionStep && (
                        <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
                    )}
                </div>
            </div>
        </div>
    );
}
