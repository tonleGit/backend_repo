// import { db } from "../config/firebaseConfig";

import { db } from "../config/remoteConfig";

export const getUserById = async (id: string) => {
  return await db.collection("USERS").doc(id).get();
};

export const getAllUsersData = async () => {
  return await db.collection("USERS").get();
};

export const updateUserById = async (id: string, data: any) => {
  const userRef = db.collection("USERS").doc(id);
  // Update the document
  await userRef.update(data);
  return userRef;
};

export const createNewUser = async (data: any) => {
  return await db.collection("USERS").add(data);
};
