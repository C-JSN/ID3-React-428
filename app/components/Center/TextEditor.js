import React, { Component } from 'react';
import path from 'path';
import { app, ipcRenderer } from 'electron';

export default class TextEditor extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    let amdRequire = global.require('monaco-editor/min/vs/loader.js').require;

    function uriFromPath(_path) {
      var pathName = path.resolve(_path).replace(/\\/g, '/');
      console.log('pathName', pathName);
      console.log('__dirname', __dirname);
      if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
      }
      return encodeURI('file://' + pathName);
    }
    amdRequire.config({
      baseUrl: uriFromPath(path.resolve(__dirname, '../node_modules/monaco-editor/min'))
    });
    // console.log(uriFromPath(path.resolve(__dirname, '../node_modules/monaco-editor/min')));
    // workaround monaco-css not understanding the environment
    self.module = undefined;
    // workaround monaco-typescript not understanding the environment
    self.process.browser = true;
    var editor;
    // console.log('editor', editor);
    amdRequire(['vs/editor/editor.main'], () => {
      editor = monaco.editor.create(document.getElementById('editor'), {
        value: file,
        language: 'javascript',
        theme: "vs-dark",
      });
      console.log('editor', editor);
    });
  }

  render() {
    return (
      <div>
        <div>
          <div
            id="editor"
            className="editor-container"
            style={{ height: '100%', width: '100%' }}
          ></div>
        </div>
      </div>
    );
  }
}
