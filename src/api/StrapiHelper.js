export function strapiFlatten(obj) {
    if (Array.isArray(obj.data)) {
        return obj.data.map(flattenAttributes)
    }

    else if (obj.data?.attributes) {
        return flattenAttributes(obj.data)
    }

}

function flattenAttributes(obj) {
    const newObj = {
        id: obj.id,
    };

    Object.entries(obj.attributes).forEach((entry) => {
        if (entry[1] && typeof entry[1] === 'object' && entry[1].hasOwnProperty('data')) {
            newObj[entry[0]] = strapiFlatten(entry[1]);
        } else {
            newObj[entry[0]] = entry[1];
        }
    });

    return newObj;
}