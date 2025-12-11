import { forwardRef } from "react";
import { MessagesProps } from "./types";
import MessageBubble from "./message-bubble";
import ThinkingBubble from "./thinking-bubble";

const Messages = forwardRef<HTMLDivElement, MessagesProps>(({ messages, isThinking, from, text }, ref) => {

    return (
        <div
            ref={ref}
            className="flex-1 overflow-y-auto p-3 space-y-2"
        >
            {messages.map((message, index) => (
                <MessageBubble key={index} text={message.text} from={message.from} />
            ))}
            {isThinking && <ThinkingBubble />}
        </div>
    );
});

export default Messages;