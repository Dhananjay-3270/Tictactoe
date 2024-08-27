import React from "react";
import { useState } from "react";
import "./Tictactoe.css";
import Usetictactoe from "./Usetictactoe";
const Tictactoe = () => {
  const { board, isNext, handleclick, handlereset, getstatus ,order } = Usetictactoe();

  return (
    <div className="game">
      <div className="status">
        {getstatus(board)}
        <button className="reset" onClick={handlereset}>
          Reset
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="cell"
              onClick={() => {
                handleclick(index);
              }}
              disabled={b !== null}
            >
              {order.includes(index)? b:" "}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Tictactoe;
