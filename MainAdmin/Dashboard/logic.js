import { db } from '../../firebase.js';
import { collection, getCountFromServer } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getDashboardStats() {
    const snap = await getCountFromServer(collection(db, "tickets")); //[cite: 3]
    return snap.data().count; //[cite: 3]
}
