import contactRouter from "./contact.js";
export default function route(app) {
    app.use("/api/v1", contactRouter);
    app.use("/home", (req, res) => {
        res.send('backend hihihi');
    });
}