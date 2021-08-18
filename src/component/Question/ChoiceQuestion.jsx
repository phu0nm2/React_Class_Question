import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { actionType } from "../../store/actions/type";

class ChoiceQuestion extends Component {
  handleChose = (item) => {
    const choseAnswer = {
      QuestionId: this.props.item.id,
      answer: {
        content: item.content,
        exact: item.exact,
      },
    };

    // type, payload
    this.props.dispatch(createAction(actionType.PUSH_ANSWER, choseAnswer));
  };

  render() {
    const { content, id, answers } = this.props.item;

    return (
      <div>
        <h3>
          Câu {id}: {content}
        </h3>

        {answers.map((answer) => {
          return (
            <div key={answer.id}>
              <input
                name={id}
                onChange={() => this.handleChose(answer)}
                value={answer.id}
                type="radio"
              />
              <label>{answer.content}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect()(ChoiceQuestion);
