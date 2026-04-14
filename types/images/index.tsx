import { branding } from "./lists/branding";
import { home } from "./lists/home";
import { login } from "./lists/login";

export interface ImageAsset {
    src: string;
    width: number;
    height: number;
}

export const images = {
    branding: branding,
    home: home,
    login: login
}