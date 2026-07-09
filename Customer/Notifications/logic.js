import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getNotifications(customerId) {
    const q = query(collection(db, "notifications"), where("targetId", "==", customerId));
    return await getDocs(q); //[cite: 3]
}
