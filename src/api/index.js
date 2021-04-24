import config from "../config.json";
import { createClient } from "pexels";

export const client = createClient(config.API_KEY);
