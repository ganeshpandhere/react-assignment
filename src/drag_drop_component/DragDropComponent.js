import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import './dnd.css';


class DragDropContainer extends React.Component {
  render() {
    return (
      <div className="drag_things_to_boxes">
        <p>You can also drag to re-order within boxes.</p>
        <p>Note &#8759; used as drag handles.</p>
        <div className="things_to_drag">
          <Boxable targetKey="A" label="A1"  text="A1"/>
          <Boxable targetKey="B" label="B1"  text="B1"/>
          <Boxable targetKey="B" label="B2" text="B2"/>
          <Boxable targetKey="B" label="B3" text="B3"/>
          <Boxable targetKey="A" label="A2" text="A2"/>
          <Boxable targetKey="A" label="A3" text="A3"/>
        </div>
        <div className="boxes">
          <Box targetKey="A"/>
          <Box targetKey="B"/>
        </div>
      </div>
    )
  }
}

export default DragDropContainer;