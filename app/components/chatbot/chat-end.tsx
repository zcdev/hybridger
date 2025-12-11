import { ChatWindowProps } from "./types";
export default function ChatEnd({ onClose }: ChatWindowProps) {
    return (
        <button
            className="w-full text-left px-3 py-2 rounded bg-indigo-600 text-white"
            onClick={onClose}
        >
            End chat
        </button>
    );
}