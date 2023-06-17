import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const rock = new JSONDB("rock.json");


serveAPI("/api/", async (param, req, path) => {
    if (path == "/api/save") {
        param.id=crypto.randomUUID();
        param.likecount=0;
        rock.data.push(param);
        rock.write();
        return "pushing data was saved"
    }
    if (path == "/api/watch") {
        return rock.data
    }
    if(path == "/api/like") {
        console.log(param)
        const d=rock.data.find(i => i.id==param.id);
        console.log(d)
        d.likecount=d.likecount+1;
        console.log(d.likecount)
        rock.write();
        return "いいね+1"
    }

    return "岩投稿東尋坊"
    ;    
});