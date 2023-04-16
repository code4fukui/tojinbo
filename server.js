import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const rock = new JSONDB("rock.json");


serveAPI("/api/", async (param, req, path) => {
    if (path == "/api/save") {
        rock.data.push(param);
        rock.write();
        return "pushing data was saved"
    }
    if (path == "/api/watch") {
        return rock.data
    }

    return "岩投稿東尋坊"
    ;    
});