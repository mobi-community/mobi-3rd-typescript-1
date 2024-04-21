import { useRef } from "react";

interface RefObjectProps {
    text: string;
}

const TestRefObject: React.FC<RefObjectProps> = ({ text }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.color = "red";
        }
    };
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>포커싱버튼</button>
            <p>{text}</p>
        </>
    );
};
export default TestRefObject;
