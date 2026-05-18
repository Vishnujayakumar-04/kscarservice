// This is a utility script to create the initial admin user.
// Run this file using Node.js if needed, or simply use the Firebase Console to add
// kscarpoint@gmail.com with password 123456

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAySt2wrdlGxdCt8ZTulLkVrgS5frXNe4k",
    authDomain: "kscarpoint-4076f.firebaseapp.com",
    projectId: "kscarpoint-4076f",
    storageBucket: "kscarpoint-4076f.firebasestorage.app",
    messagingSenderId: "1013819650454",
    appId: "1:1013819650454:web:76744abad8ca9d589d6db7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createInitialAdmin() {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, "kscarpoint@gmail.com", "123456");
        const user = userCredential.user;

        // Add to admins collection for role-based access control later
        await setDoc(doc(db, "admins", user.uid), {
            email: user.email,
            role: "admin",
            createdAt: new Date().toISOString()
        });

        console.log("Successfully created admin user:", user.email);
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error);
        process.exit(1);
    }
}

createInitialAdmin();
