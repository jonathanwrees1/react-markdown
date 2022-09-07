import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Container, Row, Col } from 'react-bootstrap';
import './previewer.css';

const initialState = `
# Welcome to my React Markdown Previewer!
---

## This is a sub-heading...
### And here's some other cool stuff:


Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org),

> Block Quotes!


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Kitty Cat](https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470_1280.jpg)


`;

export default class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    }); //changing the state of the (target) input element triggered by the (event) of typing. The (value) is what is being typed in. It changes the state from '' to the current value
  }

  render() {
    const { input } = this.state;

    return (
      <Container fluid className='container-fluid'>
        <div className='d-flex text-center justify-content-center'>
          <h1 className='mt-5 mb-5 pt-5 pb-5 col-xs-4 text-center heading'>
            MARKDOWN PREVIEWER
          </h1>
        </div>
        <Row className='d-flex justify-content-center'>
          <Col className='d-block m-3 col-lg-5 col-11 justify-content-center'>
            <h2 className='text-center heading mt-5 mb-5 rounded-pill p-3'>
              INPUT CODE HERE
              <br />
              <i class='fa-solid fa-arrow-down'></i>
            </h2>
            <textarea
              className='mb-5 rounded p-3'
              id='editor'
              value={input}
              onChange={this.handleChange}
            ></textarea>
          </Col>
          <Col className='d-block m-3 col-lg-5 col-11 justify-content-center'>
            <h2 className='text-center heading mt-5 mb-5 rounded-pill p-3'>
              OUTPUT HERE <br />
              <i class='fa-solid fa-arrow-down'></i>
            </h2>
            <p className='mb-5 rounded p-3' id='preview'>
              <ReactMarkdown remarkPlugins={[gfm]}>{input}</ReactMarkdown>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
