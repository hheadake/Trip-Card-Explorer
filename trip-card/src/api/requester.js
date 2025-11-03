

export async function requester(method, filePath) {
   

    if (method !== 'GET') {
        console.alert(`Local mock requester: "${method}"`);
    }

    try {
        
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.error('requester error:', err);
        throw err;
    }
}

export const get = requester.bind(null, 'GET');


export default {
    get,
 
};
