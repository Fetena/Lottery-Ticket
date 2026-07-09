import { db } from '../../firebase.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function createNewAdmin(adminData) {
    // Logic to add a new admin to the admins collection
    await setDoc(doc(db, "admins", adminData.id), adminData);
}
