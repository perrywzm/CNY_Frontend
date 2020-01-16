import React from "react";

interface Props {
  width: number;
  height: number;
  saveCanvasRef: (ctx: HTMLCanvasElement) => void;
}

/**
 * PureCanvas
 *
 * Input props:
 *  width:   Canvas width
 *  height:  Canvas height
 *  saveContextRef:   Callback function to update context reference
 */
class PureCanvas extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.width !== nextProps.width ||
      this.props.height !== nextProps.height
    );
  }

  saveContextRef = (node: HTMLCanvasElement) => {
    if (node) {
      this.props.saveCanvasRef(node);
    } else {
      return null;
    }
  };

  render() {
    return (
      <canvas
        ref={this.props.saveCanvasRef}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

export default PureCanvas;
