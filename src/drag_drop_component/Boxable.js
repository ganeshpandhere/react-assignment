import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
// eslint-disable-next-line no-unused-vars
var shortid = require('shortid');

export default class Boxable extends React.Component {
    render() {
      return (
        <div className="boxable_component" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(console.log('end'))}
            onDrop={(e)=>(console.log(e))}
    
          >
            <div className="child_elem">
              {this.props.text}
            </div>
          </DragDropContainer>
        </div>
      );
    }
  }