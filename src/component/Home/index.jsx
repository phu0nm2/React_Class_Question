import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../../store/actions/question';
import ChoiceQuestion from '../Question/ChoiceQuestion';
import FillQuestion from '../Question/FillQuestion';

class Home extends Component {
  handleSubmit = () => {
    let res = 0;

    for (let item of this.props.DanhSachDapAn) {
      if (item.answer.exact === true) {
        res++;
      }
    }
    alert('Bạn trả lời đúng: ' + res + '/' + this.props.DanhSachDapAn.length);
  };

  render() {
    return (
      <div style={{ margin: '20px 20px' }}>
        <h1>Online Test</h1>
        {this.props.question_Type.map((item, index) => {
          return (
            <div key={index}>
              {item.questionType === 1 ? (
                <ChoiceQuestion item={item}></ChoiceQuestion>
              ) : (
                <FillQuestion item={item}></FillQuestion>
              )}
            </div>
          );
        })}

        <button
          onClick={this.handleSubmit}
          className="btn btn-success mt-3"
        >
          Nộp bài
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion);
  }
}

const mapStateToProps = (state) => {
  return {
    question_Type: state.question.questionList,
    DanhSachDapAn: state.question.DanhSachDapAn,
  };
};
export default connect(mapStateToProps)(Home);
