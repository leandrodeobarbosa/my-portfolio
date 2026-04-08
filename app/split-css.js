import fs from 'fs';

const css = fs.readFileSync('src/styles/global.css', 'utf-8');

// Extract tokens (everything inside :root)
const rootMatch = css.match(/:root\s*\{[^}]+\}/m);
if (rootMatch) {
  fs.mkdirSync('src/styles/base', { recursive: true });
  fs.writeFileSync('src/styles/base/tokens.css', `@layer base {\n\t${rootMatch[0]}\n}\n`);
}

// Extract view transitions
const transitionMatch = css.match(/\/\* View Transition - Terminal-style effect[\s\S]*?@keyframes global-fade-in\s*\{[\s\S]*?\}\n\}/m);
if (transitionMatch) {
  fs.mkdirSync('src/styles/base', { recursive: true });
  fs.writeFileSync('src/styles/base/transitions.css', transitionMatch[0] + '\n');
}

// Write the new main.css
const mainCss = `@import './base/tokens.css';
@import './base/transitions.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-typing {
    animation: typing 1s steps(55) forwards;
    width: 0;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
}

@layer base {
	body {
		background-image: radial-gradient(ellipse at 0% 0%, rgba(20, 184, 166, 0.08) 0%, transparent 50%);
	}
}

@import './legacy-components.css';
`;
fs.writeFileSync('src/styles/main.css', mainCss);

// Extract the components layer and write to legacy-components.css
const componentsMatch = css.match(/@layer components\s*\{[\s\S]*/m);
if (componentsMatch) {
  fs.writeFileSync('src/styles/legacy-components.css', componentsMatch[0]);
}

// Remove old global.css
fs.unlinkSync('src/styles/global.css');
