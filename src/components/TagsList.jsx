import React from 'react';

const TagsList = ({tags}) => {
    return (
        <div>
            {tags.map(tag => <code key={tag}>{tag} </code>)}
        </div>
    );
};

export default TagsList;