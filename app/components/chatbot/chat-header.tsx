import { ChatHeaderProps } from "@/lib/types";

export default function ChatHeader({ onClose }: ChatHeaderProps) {
    return (
        <div className="p-3 border-b flex justify-between items-center">
            <span className="font-semibold">HyBridger Assistant</span>
            <button onClick={onClose} className="text-sm text-neutral-500">–</button>
        </div>
    );
}