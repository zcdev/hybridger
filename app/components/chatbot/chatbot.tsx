"use client";
import { useState } from "react";
import ChatWindow from "./chat-window";
import ImageWrapper from "../ui/image-wrapper";

export default function Chatbot() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-0 md:bottom-5 right-0 md:right-5 z-50 dark:text-white">
            {open ? (
                <ChatWindow onClose={() => setOpen(false)} />
            ) : (
                <div className="px-5 md:px-2">
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-full px-2 py-3 bg-indigo-600 text-white shadow-lg w-[70px] h-[70px]"
                    >
                        <ImageWrapper src="https://images.ctfassets.net/nxqkiyet73hh/4uYmMHR9hFtGEkd2z74OBn/74df222ff6bfa20260f9b81a2f62e046/hybridger-chatbot.webp" alt="Chatbot" width={47} height={47} />
                    </button>
                    <p className="text-sm text-center text-indigo-600 font-semibold m-1 ">Chat now</p>
                </div>
            )}
        </div>
    );
}