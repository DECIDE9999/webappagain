import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./pages/pages.css";

import CVPage from "./pages/CVpage";
import Contact from "./pages/Contact";

import Header from "./components/header/Header";
import reportWebVitals from "./reportWebVitals";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "CV",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ page: e });
  }

  pageController() {
    if (this.state.page === "Contact") return <Contact />;
    return <CVPage />;
  }

  render() {
    return (
      <div>
        <Header text="Thanushen Balaskandar" onChange={this.handleChange} />
        {this.pageController()}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
