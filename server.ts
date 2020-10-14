import * as express from 'express';
import {Category, go} from "./main";

const app = express()
const PORT: string | number = process.env.PORT || 5000;

// const eventId: string = '1121811'; // EMEA W (MEN) - Pool 2
// const eventId: string = '1128517'; // EMEA E (MEN) - Pool 6

app.use("*", (req, res) => {
    const eventId = req.query.eventId as string;
    const category = req.query.category as Category;

    if (!eventId || !category) {
        res.end('example params: ?eventId=1121811&category=B')
        return;
    }

    go(eventId, category).then((result) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        }
    );
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));
