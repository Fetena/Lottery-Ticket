import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getPendingPayments(adminId) {
    const q = query(collection(db, "payments"), where("adminId", "==", adminId), where("status", "==", "Pending"));
    return await getDocs(q);
}
