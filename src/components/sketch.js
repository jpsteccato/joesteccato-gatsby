import React, { Component } from 'react';
import styled from '@emotion/styled';
import p5 from 'p5/lib/p5.min';

const SketchWrapper = styled.div`
  & > canvas {
    display: block;
    margin: 0 auto;
    z-index: -2;
    border: 1px #fff solid;
    width: ${props => props.width};
    height: ${props => props.height};
  }
`;

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
  }

  componentDidMount() { //eslint-disable-line
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentDidUpdate() { //eslint-disable-line
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentWillUnmount() { //eslint-disable-line
    this.canvas.remove();
  }

  render() {
    return <SketchWrapper ref={this.sketchRef} width={"100%"} height={"100%"} />;
  }
}

export default Sketch;