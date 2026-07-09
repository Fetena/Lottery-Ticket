import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchNotifications(branchId) {
    const q = query(collection(db, "notifications"), where("branchId", "==", branchId)); //[cite: 3]
    return await getDocs(q); //[cite: 3]
}
