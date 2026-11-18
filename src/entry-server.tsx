import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { localBusinessSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const siteUrl = site.url;
export function render() {
  return {
    html: renderToString(<StrictMode><App /></StrictMode>),
    jsonLd: JSON.stringify(localBusinessSchema()),
  };
}
