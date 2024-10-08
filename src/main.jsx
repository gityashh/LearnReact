import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import NewContext from './contexts/NewContext.jsx';

createRoot(document.getElementById('root')).render(
    <NewContext>
        <App />
    </NewContext>
);
