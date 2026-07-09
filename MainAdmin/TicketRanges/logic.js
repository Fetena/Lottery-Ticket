import { db } from '../../firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getAllTickets() {
    return await getDocs(collection(db, "tickets")); //[cite: 3]
}
