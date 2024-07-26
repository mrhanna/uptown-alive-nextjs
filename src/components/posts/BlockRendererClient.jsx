"use client";

import Image from "next/image";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const blocks = {
    paragraph: ({ children }) => <p className="my-4">{children}</p>,
    heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <h2>{children}</h2>
          case 2:
            return <h3>{children}</h3>
          case 3:
            return <h4>{children}</h4>
          case 4:
            return <h5>{children}</h5>
          default:
            return <h6>{children}</h6>
        }
    }, 
    list: ({children, format}) => {
        switch (format) {
            case 'unordered':
                return <ul className="list-disc list-inside">{children}</ul>;
            case 'ordered':
                return <ol className="list-decimal list-inside">{children}</ol>;
        }
    },
    quote: ({children}) => <blockquote className="mx-8 border-l-2 border-l-dark pl-4 italic">{children}</blockquote>,
    code: ({children}) => <code className="bg-offwhite font-mono">{children}</code>,
    image: ({image}) => (
        <Image 
            src={image.url} 
            alt={image.alternativeText} 
            height={400}
            width={400*image.width/image.height}
        />
    ),
    link: ({children, url}) => (
        <a href={url} target="_blank">{children}</a>
    ),
}

export default function BlockRendererClient({ content }) {

  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={blocks} 
    />
  );
}