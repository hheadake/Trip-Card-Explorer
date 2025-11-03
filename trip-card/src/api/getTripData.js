import * as request from './requester';

const BASE_URL = '/data/TripData.json'

const getAll = async () => {
    try {
        const data = await request.get(BASE_URL);
    return data.trips || [];  
    } catch (error) {
        console.table(error)
    }
    
};

export default getAll;