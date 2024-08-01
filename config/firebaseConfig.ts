import { applicationDefault, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(), // Uses default application credentials
    projectId: "test-project-001",
  });
}

const db = getFirestore();

db.settings({
  host: "localhost:8080",
  ssl: false,
});

export { db };
