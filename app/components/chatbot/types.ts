export interface Message {
    from?: string;
    text?: string;
}

export type MessagesProps = {
    isThinking?: boolean;
    key?: number;
    messages: any;
    from?: "bot" | "user";
    text?: string;
    ref: () => void;
};

export type ChatWindowProps = {
    onClose: () => void;
};

export type ChatHeaderProps = {
    onClose: () => void;
};

export type OptionButtonsProps = {
    onClick: (value: string) => void;
    current: any;
};

export type ChatInputProps = {
    onSubmit: (e: React.FormEvent) => void;
    input: string;
    setInput: (value: string) => void;
};