import asyncRoute from '../lib/asyncRoute'

export const Header = asyncRoute(() => import('./Header') );
export const Article = asyncRoute(() => import('./Article') );
export const Footer = asyncRoute(() => import('./Footer') );


