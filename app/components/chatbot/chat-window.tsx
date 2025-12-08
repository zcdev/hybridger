import { useState, useRef, useEffect } from "react";
import { Message, ChatWindowProps } from "@/lib/types";
import ChatHeader from "./chat-header";
import Messages from "./messages";
import ChatInput from "./chat-input";
import OptionButtons from "./option-buttons";
import { chatScript } from "@/lib/chatscript";

// const randomDelay = () => 600 + Math.random() * 600;

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
            setIsThinking(false);
            setMessages(prev => [...prev, { from: "bot", text: current.text }]);
            setStep(prev => prev + 1);
        }
        // If it's a user-option step → UI waits for click
    }, [step]);

    // Unified user handler
    function handleUserResponse(userText: string) {
        setMessages(prev => [...prev, { from: "user", text: userText }]);
        setStep(prev => prev + 1);
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

    // Checking current step: placehold for now
    console.log(current);

    return (
        <div className="w-80 h-96 bg-white dark:bg-neutral-900 shadow-xl rounded-xl flex flex-col">

            {/* Header */}
            <ChatHeader onClose={onClose} />

            {/* Messages */}
            <Messages messages={messages} ref={ref} />

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
