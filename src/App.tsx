import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
('react-markdown');

function App() {
  const [text, setText] = useState('# markdown preview');
  return (
    <main>
      <section className='text-area'>
        <div className='center-container'>
          <textarea
            autoFocus
            value={text}
            className='user-input'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </section>
      <section className='mark-area'>
        <div className='center-container'>
          <ReactMarkdown className='output'>{text}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
}

export default App;
