import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

export { app };
