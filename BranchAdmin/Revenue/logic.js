import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchRevenue(branchId) {
    const q = query(collection(db, "payments"), where("branchId", "==", branchId), where("status", "==", "approved")); //[cite: 3]
    return await getDocs(q); //[cite: 3]
}
