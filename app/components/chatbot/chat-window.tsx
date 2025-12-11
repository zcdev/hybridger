import { useState, useRef, useEffect } from "react";
import { Message, ChatWindowProps } from "./types";
import ChatHeader from "./chat-header";
import Messages from "./message-list";
import ChatInput from "./chat-input";
import OptionButtons from "./option-buttons";
import { chatScript } from "@/app/components/chatbot/chatscript";

const randomDelay = () => Math.random() * (4000 - 2000) + 2000;

export default function ChatWindow({ onClose }: ChatWindowProps) {

    const [step, setStep] = useState(0);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isThinking, setIsThinking] = useState(false);
    const [input, setInput] = useState("");

    const scrollRef = useRef<HTMLDivElement>(null);

    // Derive current step from script — not stored in state
    const current = chatScript[step];

    // Auto-scroll when messages (or thinking bubble) change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isThinking]);

    // Bot engine: reacts to step changes, controls timing & progression
    useEffect(() => {
        // If we've reached past the end of the script, stop everything.
        if (!current) {
            setIsThinking(false);
            return;
        }

        // If this step is a bot message, schedule it with a delay.
        if (current.from === "bot") {
            setIsThinking(true);

            const timeoutId = setTimeout(() => {
                setMessages(prev => [...prev, { from: "bot", text: current.text }]);
                setIsThinking(false);
                setStep(prev => prev + 1); // move to the next step after bot speaks
            }, randomDelay());

            // Strict Mode-safe cleanup: cancel the timeout if step changes/unmounts
            return () => clearTimeout(timeoutId);
        }

        // If this step expects user interaction (options or input), just wait.
        if (current.from === "user-option" || current.from === "user-input") {
            setIsThinking(false);
            return;
        }

    }, [step]); // Re-run when step advanced

    // Unified user handler: only logs message from user-option + advances step
    function handleUserResponse(userText: string) {
        setMessages(prev => [...prev, { from: "user-option", text: userText }]);
        setStep(prev => prev + 1);
    }

    // Input submission (for user-input steps)
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (!input.trim()) return;
        handleUserResponse(input);
        setInput("");
    }

    const isOptionStep = current?.from === "user-option";
    const isInputStep = current?.from === "user-input";

    return (
        <div className="w-full min-w-[320px] max-w-[320px] h-auto max-h-[80vh] md:max-h-[600px] bg-white dark:bg-neutral-900 shadow-xl rounded-xl flex flex-col border border-gray-200">
            {/* Header */}
            <ChatHeader onClose={onClose} />

            {/* Messages */}
            <Messages messages={messages} ref={scrollRef} isThinking={isThinking} />

            {/* Fake Input */}
            {!isThinking && (
                <div className="p-3 border-t">
                    <div className="rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-500 text-sm p-2">
                        {/* Option buttons */}
                        {isOptionStep && (
                            <OptionButtons current={current} onClick={handleUserResponse} />
                        )}

                        {/* Input field */}
                        {!isOptionStep && isInputStep && (
                            <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
                        )}

                        {/* End of chat banner */}
                        {!isOptionStep && !isInputStep && (
                            <p className="text-center text-indigo-600 font-bold">Chat ended</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
