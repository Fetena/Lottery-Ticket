import { db } from '../../firebase.js';
import { collection, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getAuditLogs() {
    const q = query(collection(db, "activity_logs"), orderBy("timestamp", "desc")); //
    return await getDocs(q); //
}
