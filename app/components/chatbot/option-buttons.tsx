import { OptionButtonsProps } from "@/lib/types";

export default function OptionButtons({ current, onClick }: OptionButtonsProps) {

    // Checking current step: placehold for now
    console.log("option", current);

    return (
        <div className="p-3 border-t space-y-2 dark:border-neutral-700">
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