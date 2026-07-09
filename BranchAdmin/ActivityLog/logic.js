import { db } from '../../firebase.js';
import { collection, query, where, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchLogs(branchId) {
    const q = query(collection(db, "activity_logs"), where("branchId", "==", branchId), orderBy("timestamp", "desc")); //
    return await getDocs(q); //
}
