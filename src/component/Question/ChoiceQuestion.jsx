import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from '../../store/actions';
import { actionType } from '../../store/actions/type';

class ChoiceQuestion extends Component {
  handleChose = (item) => {
    // console.log(item);

    const { id } = this.props.item;
    const choseAnswer = {
      QuestionId: id,
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
                style={{ height: '18px', width: '18px' }}
                name={id}
                onChange={() => this.handleChose(answer)}
                value={answer.id}
                type="radio"
              />
              <label style={{ marginLeft: '10px', fontSize: '18px' }}>{answer.content}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect()(ChoiceQuestion);
