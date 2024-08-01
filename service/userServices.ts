import {
  createNewUser,
  getAllUsersData,
  updateUserById,
} from "../repository/userCollection";

export async function fetchAllUserData() {
  const docsRef = await getAllUsersData();
  const userList = docsRef.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }));
  return userList;
}

export async function updateUserData(data: any) {
  const { id, ...updateData } = data;
  const docRef = await updateUserById(id, updateData);
  return docRef.get();
}

export async function createNewUserData(data: any) {
  const docRef = await createNewUser(data);
  return docRef.get();
}
