import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { test } from 'test';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

test(1);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
