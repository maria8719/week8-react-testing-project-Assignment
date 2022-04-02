import * as ReactDOMClient from 'react-dom/client';
import App from './App';

// React 18.x update
const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);