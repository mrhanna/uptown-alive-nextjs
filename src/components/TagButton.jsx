import React from 'react';

const TagButton = ({
    tag,
    className,
}) => {
    return (
        <button className={`rounded-lg px-4 py-1 drop-shadow bg-xanthous text-dark hover:bg-offwhite transition ${className}`}>
            {tag.name}
        </button>
    )
}

export default TagButton;