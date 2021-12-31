import { dummyData } from "./dummyData";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        return dummyData.find(listing => listing.id === id);
    }
}