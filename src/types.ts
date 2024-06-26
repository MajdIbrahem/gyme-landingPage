import { ReactNode } from "react";
import { JsxElement } from "typescript";

export type BenifitType = 
    {
        icon: ReactNode,
        title: string,
        description:string,
    }
export type ClassType = {
        name: string,
        description:string
        image: string
    }