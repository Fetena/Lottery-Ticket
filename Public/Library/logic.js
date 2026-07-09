// /Public/Library/logic.js
import { db } from '../../firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function getPublicLibrary() {
    return await getDocs(collection(db, "public_library")); //
}
