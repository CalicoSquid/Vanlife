

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCkUFvjxarkaplJ4Eav8TILOnmTrdNzE3g",
  authDomain: "vanlife-5887d.firebaseapp.com",
  projectId: "vanlife-5887d",
  storageBucket: "vanlife-5887d.appspot.com",
  messagingSenderId: "866686775488",
  appId: "1:866686775488:web:5f920bb80ec4d8eb7d3d25",
  measurementId: "G-J0CBQRPXWX"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const docSnapshot = await getDoc(docRef)
    const van = docSnapshot.data()
    return van
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}





//export async function getHostVans(id) {
//    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//    const res = await fetch(url)
//    if (!res.ok) {
//        throw {
//            message: "Failed to fetch vans",
//            statusText: res.statusText,
//            status: res.status
//        }
//    }
//    const data = await res.json()
//    return data.vans
//}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}