// MainAdmin/AdminManagement/logic.js
import { db } from '../../../firebase.js'; 
import { doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function createAdmin(name, email, password) {
    // Firebase logic to write to the 'admins' collection
    await setDoc(doc(db, "admins", email), { name, email, role: 'admin' });
}

export async function deleteAdmin(adminId) {
    // Logic to delete an admin document
    await deleteDoc(doc(db, "admins", adminId));
}
