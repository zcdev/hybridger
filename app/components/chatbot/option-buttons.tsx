import { OptionButtonsProps } from "@/lib/types";

export default function OptionButtons({ current, onClick }: OptionButtonsProps) {

    return (
        <div className="p-3 space-y-2">
            {current.options.map((opt: string) => (
                <button
                    key={opt}
                    onClick={() => onClick(opt)}
                    className="w-full text-left px-3 py-2 rounded bg-indigo-600 text-white"
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}