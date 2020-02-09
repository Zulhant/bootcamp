const PROD = "https://rtrw-api.nusatek.id/";
const DEV = "http://117.53.44.150:7000/";

export const apiUrl = process.env.NODE_ENV !== "production" ? DEV : DEV;
