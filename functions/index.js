const { onRequest } = require(“firebase-functions/v2/https”);
const { google } = require(“googleapis”);
const https = require(“https”);
const cors = require(“cors”)({ origin: true });

const SHEET_ID = “1mfRlr9EaR-XVMEf3W0LaJEEUQ9uS9llLsWTr0jz88ng”;
const SHEET_TAB = “Sheet1”;
const N3D_BASE = “www.n3dmelbourne.com”;

function n3dFetch(path, apiKey) {
return new Promise((resolve, reject) => {
const options = {
hostname: N3D_BASE,
path: “/api/v1” + path,
method: “GET”,
headers: {
“Authorization”: “Bearer “ + apiKey,
“Accept”: “application/json”,
},
};
const req = https.request(options, (res) => {
let data = “”;
res.on(“data”, (chunk) => { data += chunk; });
res.on(“end”, () => {
try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
catch (e) { reject(new Error(“Invalid JSON from N3D”)); }
});
});
req.on(“error”, reject);
req.end();
});
}

exports.getDesigns = onRequest(
{ region: “us-central1” },
(req, res) => {
cors(req, res, async () => {
if (req.method !== “GET”) return res.status(405).json({ error: “Method not allowed” });
const apiKey = req.headers[“x-api-key”];
if (!apiKey) return res.status(401).json({ error: “Missing X-Api-Key header” });
try {
const result = await n3dFetch(
“/designs?category=character&limit=200&include=details&locale=KR”,
apiKey
);
if (result.status !== 200) return res.status(result.status).json(result.body);
return res.status(200).json(result.body);
} catch (err) {
console.error(“getDesigns error:”, err);
return res.status(500).json({ error: “Failed to fetch designs”, detail: err.message });
}
});
}
);

exports.submitOrder = onRequest(
{ region: “us-central1” },
(req, res) => {
cors(req, res, async () => {
if (req.method !== “POST”) return res.status(405).json({ error: “Method not allowed” });
try {
const { ref, placed_at, customer, items, total_usd, shiny_request } = req.body;
if (!ref || !customer || !items) return res.status(400).json({ error: “Missing required fields” });
const auth = new google.auth.GoogleAuth({
scopes: [“https://www.googleapis.com/auth/spreadsheets”],
});
const authClient = await auth.getClient();
const sheets = google.sheets({ version: “v4”, auth: authClient });
const timestamp = new Date(placed_at).toLocaleString(“en-US”, {
timeZone: “Asia/Seoul”,
dateStyle: “medium”,
timeStyle: “short”,
});
const orderDetails = items
.map((i) => i.name + “ Pokeball x” + i.qty + “ ($” + i.line_total.toFixed(2) + “)”)
.join(”, “);
const row = [
timestamp,
customer.name,
customer.email,
customer.phone,
customer.contact_method,
orderDetails,
“$” + total_usd.toFixed(2),
shiny_request || “None”,
];
await sheets.spreadsheets.values.append({
spreadsheetId: SHEET_ID,
range: SHEET_TAB + “!A:H”,
valueInputOption: “USER_ENTERED”,
insertDataOption: “INSERT_ROWS”,
requestBody: { values: [row] },
});
return res.status(200).json({ success: true, ref });
} catch (err) {
console.error(“submitOrder error:”, err);
return res.status(500).json({ error: “Failed to save order”, detail: err.message });
}
});
}
);
