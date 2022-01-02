import { v4 as uuid } from "uuid";
import { db } from "../db";

export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (req, h) => {
    const id = uuid(); // new id for listing
    // destructure all info from payload
    const { name = "", description = "", price = 0 } = req.payload;
    const userId = '12345'; //! TODO: change on auth
    const views = 0;

    // Query
    await db.query(`
        INSERT INTO listings (id, name, description, price, user_id, views)
        VALUES (?, ?, ?, ?, ?, ?);
    `, [id, name, description, price, userId, views]);
    
    // return values
    return {id, name, description, price, user_id: userId, views}
  },
};
