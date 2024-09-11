import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Maximize2 } from 'lucide-react';
const Editor = (props) => {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
    // console.log(value);
  };
  // console.log(ControlledEditor);
  return (
    <div className={`editor-container ${open ? '' : 'collapse'}`}>
      <div className='editor-title'>
        {displayName}
        <button
          type='button'
          className='expand-collapse-btn'
          onClick={() => {
            setOpen((preOpen) => !preOpen);
          }}
        >
          <Maximize2 />
        </button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          theme: 'material',
          mode: language,
          lineNumbers: true,
        }}
      />
    </div>
  );
};
export default Editor;
