import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getMyTickets(customerId) {
    const q = query(collection(db, "tickets"), where("customerId", "==", customerId));
    return await getDocs(q); //[cite: 3]
}
