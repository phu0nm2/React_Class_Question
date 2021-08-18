import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { actionType } from "../../store/actions/type";

class FillQuestion extends Component {
  handleChange = (e) => {
    // console.log(this.props.item.answers);
    const { id, answers } = this.props.item;
    const choseAnswer = {
      QuestionId: id,
      answer: {
        content: e.target.value.toLowerCase(),
        exact: false,
      },
    };
    console.log(answers.content);
    if (choseAnswer.answer.content === answers[0].content.toLowerCase()) {
      choseAnswer.answer.exact = true;
      console.log(choseAnswer.answer.content);
    }
    this.props.dispatch(createAction(actionType.PUSH_ANSWER, choseAnswer));
  };

  render() {
    const { content, id } = this.props.item;
    return (
      <div>
        <h3>
          Câu {id}: {content}
        </h3>
        <input onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default connect()(FillQuestion);
