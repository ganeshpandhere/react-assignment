import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './BoxItem.css';

export default class BoxItem extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    
    handleDrop = (e) => {
      e.stopPropagation();
      this.props.swap(e.dragData.index, this.props.index, e.dragData);
      e.containerElem.style.visibility="hidden";
    };
  
    deleteMe = () => {
      this.props.kill(this.props.uid);
    };
  
    render() {
      return (
        <div className="box_item_component">
          <DragDropContainer
              targetKey="boxItem"
              dragData={{label: this.props.children, index: this.props.index}}
              onDrop={this.deleteMe}
              disappearDraggedElement={true}
            >
              <DropTarget
                onHit={this.handleDrop}
                targetKey="boxItem"
              >
                <div className="outer">
                  <div className="item">
                    <span className="grabber">&#8759;</span>
                    {this.props.children}
                  </div>
                </div>
            </DropTarget>
          </DragDropContainer>
        </div>
      );
    }
  }