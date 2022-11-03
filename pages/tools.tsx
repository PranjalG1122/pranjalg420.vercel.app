import Head from "next/head";
import React from "react";
import Container from "../components/container";
import { ChevronRight, ChevronsRight, Anchor } from "react-feather";
import Link from "next/link";

export function ToolBlock({ children, link, text }) {
    return (
        <div className="flex flex-col mt-2 ml-8">
            <div className="flex flex-row items-center">
                <ChevronRight
                    strokeWidth={2}
                    size={300}
                    className="w-4 h-4 tablet:w-6 tablet:h-6"
                />
                <Link href={link}>
                    <a
                        className="text-blue-600 tablet:text-xl text-base hover:underline"
                        target="_blank"
                    >
                        {children}
                    </a>
                </Link>
            </div>
            <div className="flex flex-row items-center ml-4">
                <ChevronsRight
                    strokeWidth={2}
                    size={300}
                    className="w-4 h-4 tablet:w-6 tablet:h-6"
                />
                <div className="default-text italic">{text}</div>
            </div>
        </div>
    );
}

export function TitleBlock({ children }) {
    return (
        <p className="default-subtitle flex flex-row items-center">
            <Anchor
                strokeWidth={2}
                size={300}
                className="w-4 h-4 tablet:w-5 tablet:h-5 text-zinc-500 mr-1"
            />
            {children}
        </p>
    );
}

export default function Tools() {
    return (
        <Container top="flex-0">
            <Head>
                <title>Tools</title>
            </Head>
            <p className="default-title">Tools Used</p>
            <TitleBlock>General</TitleBlock>
            <ToolBlock link="https://code.visualstudio.com/" text="My IDE">
                Visual Studio Code
            </ToolBlock>
            <TitleBlock>Portfolio Site</TitleBlock>
            <ToolBlock
                link="https://nextjs.org/"
                text="Awesome framework for React"
            >
                NextJs
            </ToolBlock>
            <ToolBlock
                link="https://www.typescriptlang.org/"
                text="Better than Javscript"
            >
                Typescript
            </ToolBlock>
            <ToolBlock link="https://feathericons.com/" text="Minimalist Icons">
                React Feather
            </ToolBlock>
            <ToolBlock link="https://tailwindcss.com/" text="Long classnames">
                Tailwind CSS
            </ToolBlock>
            {/* Supabase, Prisma, Figma, markdowntoHTML, dangerouslyHTML,  */}
            {/* <img src="/logo.svg" /> */}
        </Container>
    );
}
