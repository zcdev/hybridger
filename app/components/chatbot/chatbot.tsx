"use client";
import { useState } from "react";
import ChatWindow from "./chat-window";
import ImageWrapper from "../ui/image-wrapper";

export default function Chatbot() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-5 z-50">
            {open ? (
                <ChatWindow onClose={() => setOpen(false)} />
            ) : (
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-full px-2 py-3 bg-indigo-600 text-white shadow-lg w-[70px] h-[70px]"
                >
                    <ImageWrapper src="https://images.ctfassets.net/nxqkiyet73hh/4uYmMHR9hFtGEkd2z74OBn/853465e75a4b20499d6ef7f689a1f7d0/hybridger-chatbot.png" alt="Chatbot" width={47} height={47} />
                </button>
            )}
            <p className="text-sm text-center text-indigo-600 font-semibold m-1 ">Chat now</p>
        </div>
    );
}