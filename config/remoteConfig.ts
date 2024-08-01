import { ServiceAccount, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as serviceAccount from "../serviceAccount.json";
import { credential } from "firebase-admin";

initializeApp({ 
  credential: credential.cert(serviceAccount as ServiceAccount),
  projectId: "test-project-3d72b",
});

const db = getFirestore();

export { db };
