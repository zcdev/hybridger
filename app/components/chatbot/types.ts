export type ScriptFrom = "bot" | "user-option" | "user-input";

export interface Message {
    from: ScriptFrom;
    text?: string;
    options?: string[];
}

export type MessagesProps = {
    isThinking?: boolean;
    key?: number;
    messages: Message[];
    from?: Message;
    text?: Message;
    ref: () => void;
};

export type ChatWindowProps = {
    onClose: () => void;
};

export type OptionButtonsProps = {
    onClick: (value: string) => void;
    current?: Message;
};

export type ChatInputProps = {
    onSubmit: (event: React.FormEvent) => void;
    input: string;
    setInput: (value: string) => void;
};