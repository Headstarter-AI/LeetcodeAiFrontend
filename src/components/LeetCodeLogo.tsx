/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface LogoComponentProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    src: string;
    alt: string;
}


const LogoComponent: React.FC<LogoComponentProps> = ({ src, alt }) => {
    return (
        <div className={`w-48 h-48 height-8 flex items-center justify-center`}>
            <img src={src} alt={alt} className="mt-32 w-full h-full object-contain" />
        </div>
    );
};

export default LogoComponent;
