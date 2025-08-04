import Backendless from "backendless";

const APP_ID = process.env.BACKENDLESS_APP_ID || "";
const API_KEY = process.env.BACKENDLESS_API_KEY || "";

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;
