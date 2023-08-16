import React, {useState} from 'react';
import {cn} from "../utils/utils.tsx";
type ButtonProps=React.ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({className,...props}:ButtonProps) => {
    const [fill, setFill] = useState(false);
    return (
        <button {...props} className={cn('bg-cyan-200 hover:bg-cyan-300 py-2 px-2 text-cyan-950',className,{'bg-emerald-500':fill})}>

        </button>
    );
};

export default Button;
