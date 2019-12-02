import React, { useContext, useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import "./drag.css";

class Drag extends React.Component {
    state = {
        items: ["Have a Quiet Night in", "Try a New Restaurant", "Go to a Concert/Show", "Watch Sports"],
        showButton: true
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
        console.log(this.state.items);
    };

    onDragEnd = () => {
        console.log(this.state.items);
        this.props.onChange(this.state.items);
    };

    render() {
        return (
            <div className="AboutUser">
                <main>
                    <h3>How would you most like to spend your free time?</h3>
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
        )
    }
}

export default Drag;