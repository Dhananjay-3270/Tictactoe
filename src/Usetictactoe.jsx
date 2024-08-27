import React from "react";
import { useState } from "react";
const Usetictactoe = () => {
  const initialdata = new Array(9).fill(null);

  const [board, setBoard] = useState(initialdata);
  const [isNext, setIsnext] = useState(true);
  const [order, setOrder] = useState([]);
  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
  ];
  const deactivate = () => {
   
    const intervalid = setInterval(() => {
        setOrder((prevboard) => {
        const temp = [...prevboard];
       temp.pop()
       if(order.length==0)
       {
        clearInterval(intervalid)
       }
        return temp;
      });

     
    }, 1000);
  };
  const handleclick = (index) => {
    setOrder([...order, index]);
    const win = checkifwin(board);
    if (win || board[index]) return;
    const tempboard = [...board];
    tempboard[index] = isNext ? "X" : "Y";
    setBoard(tempboard);
    setIsnext(!isNext);
  };
  const handlereset = () => {
    setBoard(initialdata);
    setIsnext(true);
  };

  const checkifwin = (currentboard) => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a, b, c] = WINNING_PATTERN[i];

      if (
        currentboard[a] &&
        currentboard[a] === currentboard[b] &&
        currentboard[a] === currentboard[c]
      ) {
        return currentboard[a];
      }
    }
    return null;
  };
  const getstatus = (currentboard) => {
    const win = checkifwin(board);
    if (win) {
      return `Player ${win} Won `;
    }
    if (!board.includes(null)) {
      deactivate();
      return "Draw";
    }
    return `Player ${isNext ? "X" : "Y"} turn`;
  };
  return { board, isNext, handleclick, handlereset, getstatus ,order };
};

export default Usetictactoe;
