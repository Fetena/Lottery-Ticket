import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchAppointments(branchId) {
    const q = query(collection(db, "appointments"), where("branchId", "==", branchId)); //
    return await getDocs(q); //
}
