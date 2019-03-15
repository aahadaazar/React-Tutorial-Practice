import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentdetail";
import ApprovalCard from "./approvalcard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" comment="good" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Aahad" comment="yar" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Aazar" comment="very" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="farooq" comment="nice" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
