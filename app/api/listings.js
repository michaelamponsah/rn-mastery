/**
 *  THis file contains code to handle all requaests related to listings
 *  Requeats could be GET, POST, PUT, PATCH, DELETE
 */

import client from "./client";

// Get all listings
const endpoint = "listings";
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
