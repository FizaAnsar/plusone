import { environment } from "src/environments/environment";
import { config } from '../services/config';
export const loginUrl = environment.production? 'https://api.shoppingcart.com' :'${config.server}${config.domain}'