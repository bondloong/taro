import { SeoProps } from "./seo.interfaces";

export interface HeadProps extends SeoProps {
    h1?: string;
    about: string;
    resolvedUrl?: string;
}