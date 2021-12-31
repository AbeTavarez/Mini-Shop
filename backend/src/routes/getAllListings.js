import {dummyData} from './dummyData';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => dummyData
}