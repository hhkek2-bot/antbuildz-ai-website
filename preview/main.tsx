import React from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage, RoutedPage } from '../app/site';
import '../app/globals.css';

const slug = new URLSearchParams(window.location.search).get('route')
  ?? window.location.pathname.replace(/^\/+|\/+$/g, '');
const app = slug ? <RoutedPage slug={slug} /> : <HomePage />;

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{app}</React.StrictMode>,
);
