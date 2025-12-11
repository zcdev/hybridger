import { OptionButtonsProps } from "./types";

export default function OptionButtons({ current, onClick }: OptionButtonsProps) {

    return (
        <div className="p-3 space-y-2">
            {current?.options?.map((option: string) => (
                <button
                    key={option}
                    onClick={() => onClick(option)}
                    className="w-full text-left px-3 py-2 rounded bg-indigo-600 text-white"
                >
                    {option}
                </button>
            ))}
        </div>
    );
}