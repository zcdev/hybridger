import { Message } from "./types";

export const chatScript: Message[] = [
    { from: "bot", text: "Hi there! Welcome to HyBridger CMS prototype." },
    { from: "bot", text: "Please identify your HyBridger role:" },
    {
        from: "user-option",
        options: ["I am a designer", "I am a developer", "I am a PM"]
    },

    { from: "bot", text: "Great. I am your AI virtual assistant. How can I help you today?" },

    { from: "user-input", text: "" },

    { from: "bot", text: "Processing that request…" },

    { from: "bot", text: "Let me connect with a live customer agent. Please wait…" },

    { from: "user-input", text: "" },

    { from: "bot", text: "Thank you for waiting. None of our agents are currently available. 😐" },

    { from: "bot", text: "What was the issue related to?" },
    {
        from: "user-option",
        options: ["Design", "Code", "Process", "AI assistant", "Other"]
    },

    { from: "bot", text: "Got it. Would you like to try connecting with an agent again?" },
    {
        from: "user-option",
        options: ["Yes", "No"]
    },

    { from: "bot", text: "Processing that request…" },

    { from: "bot", text: "Okay… actually nothing is real here. This is a demo." },

    { from: "bot", text: "Would you like a lovely machine hug to justify the wait time?" },
    {
        from: "user-option",
        options: ["Yes", "No"]
    },

    { from: "bot", text: "🤗 Machine hug dispensed. Did I resolve your issue?" },
    {
        from: "user-option",
        options: ["Yes", "No"]
    },

    { from: "bot", text: "Would you like one more machine hug?" },
    {
        from: "user-option",
        options: ["Yes", "No"]
    },

    { from: "bot", text: "Okay, have a lovely day. Bye! 😏" }
];  