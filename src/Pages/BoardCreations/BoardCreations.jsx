import React from "react";
import BoardCreation from "../../Components/Board/BoardCreation";
function BoardCreations() {
  const [total, setTotal] = React.useState([1]);
  
  return (
    <React.Fragment>
      {total.map((ele, i) => (
        <BoardCreation key={i} addMore={setTotal} index={ele} total={total}/>
      ))}
    </React.Fragment>
  );
}

export default BoardCreations;