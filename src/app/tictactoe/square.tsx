

interface SquareProps {
    value: string;
    onSquareClick: () => void;
}

export default function Square( {value, onSquareClick }: SquareProps) {
    return (
        <button className="border-1 flex h-25 w-25 text-8xl justify-center" onClick={onSquareClick}>
            {value}
        </button>
    )
}

