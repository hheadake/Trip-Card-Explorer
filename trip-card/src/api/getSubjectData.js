import * as request from './requester';

const BASE_URL = '/data/students.json'


const getAllSubjects = async () => {
    try {
        const data = await request.get(BASE_URL);
        const trips = data.trips || [];
        const sortedTrips = [...trips].sort((a, b) => b.rating - a.rating);

        return sortedTrips;

    } catch (error) {
        console.table(error)
    }

};

export default getAllSubjects;