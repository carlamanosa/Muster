import React from "react";

import { ReactComponent as Hamburger } from "./hamburger.svg";
import "./drag.css";

export default class App extends React.Component {
  state = {
    items: ["Watch Sports", "Go to a Concert/Show", "Try a New Restaurant", "Have a Quiet Night in"]
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDragEnd = () => {
    console.log("this.state.items: ", this.state.items);
  };

  render() {
    return (
      <div className="App">
        <main>
          <h3>How would you most like to spend your free time? (Ordered from greatest to least)</h3>
          <ul>
            {this.state.items.map((item, idx) => (
              <li key={item} onDragOver={() => this.onDragOver(idx)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={e => this.onDragStart(e, idx)}
                  onDragEnd={this.onDragEnd}
                >
                  <Hamburger />
                </div>
                <span className="content">{item}</span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}