import { db } from '../../firebase.js';
import { collection, query, where, getCountFromServer } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchStats(branchId) {
    const q = query(collection(db, "tickets"), where("branchId", "==", branchId)); //
    const snapshot = await getCountFromServer(q); //
    return snapshot.data().count; //
}
