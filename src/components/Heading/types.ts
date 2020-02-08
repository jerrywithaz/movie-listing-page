
export type BaseHeadingProps  = React.HTMLAttributes<HTMLHeadingElement>;

export type HeadingProps = {
    level: "h1" | "h2"
} & BaseHeadingProps;