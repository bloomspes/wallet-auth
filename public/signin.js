import {
    createUserWithEmailAndPassword,
    EmailAuthProvider,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
} from "firebase/auth";

import { authService } from "./config"; 

// 회원 가입
export async function signUpWithEmailProvider(email, password) {
    try {
        await createUserWithEmailAndPassword(authService, email, password)
        .then((e) => {});
    }
    catch (e) {
        console.error();
    }
}

// Email Provider를 통해 로그인
export async function signInWithEmailProvider(email, password) {
    try {
        await signInWithEmailAndPassword(authService, email, password);
    }
    catch (e) {
        return console.error();
    }
}

// Google Provider를 통해 로그인
export async function signInWithSocial(provider) {
    if (provider === "google") {
        try {
            const provider = new GoogleAuthProvider();
            await new signInWithRedirect(authService, provider);
            
            const result = await getRedirectResult(authService);

            if (result) {
                // 이메일 id와 구글 이메일 id가 서로 같으면 같은 페이지로 리다이렉션 하도록 수정.
                if (GoogleAuthProvider.PROVIDER_ID == EmailAuthProvider.PROVIDER_ID) {
                    return;
                }
            }
        }
        catch (e) {
            return console.error();
        }
    }
}

// Sign Out
export async function logout() {
    await signOut(authService);
    return;
}