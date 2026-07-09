import { db } from '../../firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getBranchCustomers(branchId) {
    const q = query(collection(db, "customers"), where("branchId", "==", branchId)); //
    return await getDocs(q); //
}
