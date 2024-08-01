import app from "./core/app";

// Start the server
const PORT = process.env.PORT || 3000;
const DOMAIN = process.env.DOMAIN || "localhost";
app.listen(PORT, () => {
  console.log(`Server is running on http://${DOMAIN}:${PORT}`);
});
