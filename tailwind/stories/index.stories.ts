import { theme } from '../index';
import '../src/styles.css';

export const complete_theme = () => theme;

export const button = () => `
<div class="grid gap-8 bg-gray-divriots">
<button class="action">AAA</button>
<button class="btn">AAA</button>
<button class="btn-primary">AAA</button></div>`;

export const prose = () => `
<div class="prose bg-black-divriots text-white">
<h1>Heading 1</h1>
<p>Loren <a href="/test">ipsum</a></p>
<blockquote>Hello djfndkngfdsfg</blockquote>
</prose>`;
