import { db } from "../db";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;

         //! TODO: make sure current user is the owner of listings

         await db.query(
             'DELETE FROM listings WHERE id=?',
             [id],
         );
         return { message: 'Success!'}
    }
}