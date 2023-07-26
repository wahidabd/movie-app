import {ReactNode, HTMLAttributes} from 'react';
import classNames from "classnames";

const IconButton = (
    {
        children,
        className,
        ...props
    }: {
        children: ReactNode,
        className?: string
    } & HTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            type='button'
            className={classNames(
                "aspect-square text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-600 rounded-full inline-flex justify-center mr-2 h-10 items-center"
            )}
            {...props}
        >
            <span>{children}</span>
            <span className='sr-only' >Icon Description</span>
        </button>
    );
};

export default IconButton;