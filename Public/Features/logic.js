// /Public/Features/logic.js
import { db } from '../../firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getPublicFeatures() {
    return await getDocs(collection(db, "site_features")); //
}
