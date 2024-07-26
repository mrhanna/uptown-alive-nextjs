"use client";

import Image from "next/image";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const blocks = {
    paragraph: ({ children }) => <p className="my-4">{children}</p>,
    heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <h2 className="text-3xl">{children}</h2>
          case 2:
            return <h3 className="text-2xl">{children}</h3>
          case 3:
            return <h4 className="text-xl">{children}</h4>
          case 4:
            return <h5 className="text-lg font-bold">{children}</h5>
          default:
            return <h6 className="text-lg font-bold">{children}</h6>
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
    quote: ({children}) => <blockquote className="mx-8 border-l-2 border-l-dark pl-8 py-4 italic">{children}</blockquote>,
    code: ({children}) => <code className="bg-[#ccc] font-mono px-1">{children}</code>,
    image: ({image}) => (
        <div class="text-center">
          <Image 
              src={image.url} 
              alt={image.alternativeText} 
              height={400}
              width={400*image.width/image.height}
              className="w-auto my-8 inline"
          />
        </div>
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