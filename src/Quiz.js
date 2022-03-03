import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    this.setState({ quiz_position: this.state.quiz_position + 1 });
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  render() {
    const isQuizEnd =
      quizData.quiz_questions.length === this.state.quiz_position - 1;

    // https://dzone.com/articles/reactjs-how-to-use-conditional-rendering-in-jsx
    // https://react-cn.github.io/react/tips/if-else-in-JSX.html
    return (
      <div>
        {(() => {
          if (isQuizEnd) {
            return (
              <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
            );
          } else {
            return (
              <QuizQuestion
                className="QuizQuestion"
                quiz_question={
                  quizData["quiz_questions"][this.state.quiz_position - 1]
                }
                showNextQuestionHandler={this.showNextQuestion.bind(this)}
              />
            );
          }
        })()}
      </div>
    );
  }
}

export default Quiz;
