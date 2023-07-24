import React, {ReactNode} from 'react';
import Header from "@/components/Header";

const PrimaryLayout = ({children}: {children: ReactNode}) => {
    return (
        <main>
            <Header/>
        </main>
    );
};

export default PrimaryLayout;