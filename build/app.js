"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var app = new hono_1.Hono();
app.get("/", function (c) { return c.text("Hello World"); });
app.get("/profile", function (c) { return c.text("Profile"); });
exports.default = app;
