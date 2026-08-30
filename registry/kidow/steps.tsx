"use client";

/**
 * Copyright (c) 2025 Voxlet (Muhammad Kaif Nazeer)
 * Source: Voxlet UI — https://ui.voxletstudio.com
 *
 * 이 컴포넌트의 라이선스는 저작권 표시를 그대로 유지할 것을 요구한다.
 * 파일을 수정하더라도 위 표시를 지우거나 다른 이름을 추가하지 않는다.
 */

import * as React from "react";

interface StepProps {
    title: string;
    children: React.ReactNode;
}

interface StepsProps {
    children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ title, children }) => {
    return (
        <div className="mb-4 last:mb-0">
            <h3 className="font-semibold text-md">{title}</h3>
            <div className="text-sm mt-2 text-muted-foreground">{children}</div>
        </div>
    );
};

const Steps: React.FC<StepsProps> = ({ children }) => {
    const filteredChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child)
    ) as React.ReactElement<StepProps>[]; 

    return (
        <ol className="relative border-l border-muted-foreground/20 ml-3">
            {filteredChildren.map((child, index) => (
                <li key={index} className="mb-10 ml-6 last:mb-0">
                    <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground/20 -left-4 ring-8 ring-background">
                        <span className="text-sm font-medium text-foreground">{index + 1}</span>
                    </div>
                    {child}
                </li>
            ))}
        </ol>
    );
};

export { Step, Steps };
export type { StepProps, StepsProps };