import React, {ReactNode} from 'react';
import Link from "next/link";
import classNames from "classnames";

const BreadcrumbAnchor = (
    {
        href,
        children,
        className
    }: {
        href?: string,
        children: ReactNode,
        className?: string
    }
) => {
    return (
        <li className={className}>
            <div className='flex items-center gap-2'>
                <span className='text-slate-400'>/</span>
                {href ? (
                    <Link href={href} className='text-slate-400 hover:text-slate-200'>{children}</Link>
                ): (children)}
            </div>
        </li>
    );
};

export default BreadcrumbAnchor;