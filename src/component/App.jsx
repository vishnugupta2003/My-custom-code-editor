import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './hooks/useLocalStorage';
const App = () => {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('javascript', '');
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `);
    }, 250);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <>
      <div className='pane top-pane'>
        <Editor
          displayName='HTML'
          language='xml'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language=' css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
};
export default App;
