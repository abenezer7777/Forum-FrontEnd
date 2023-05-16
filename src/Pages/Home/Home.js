import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Home.css";
import Question from "../../Components/Question/Question";

const Home = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [allQuestions, setAllQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // console.log(allQuestions);
  const Questions = async () => {
    try {
      const questionRes = await axios.get(
        "http://localhost:4000/api/questions"
      );
      setAllQuestions(questionRes.data.data);
    } catch (err) {
      console.log("problem", err);
    }
  };
  useEffect(() => {
    if (!userData.user) navigate("/login");
    Questions();
  }, [userData.user, navigate]);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/ask-question");
  };
  return (
    <div className="container my-5 home-container">
      <div className="d-flex mb-5 justify-content-between">
        <button className="ask_button" onClick={handleClick}>
          Ask Question
        </button>
        <input
          className="question_title searchInput"
          type="text"
          // name="search"
          Placeholder="Search Question"
          onChange={(e) => setSearch(e.target.value)}
        />
        <h4>Welcome: {userData.user?.display_name}</h4>
      </div>
      <h3>Questions</h3>
      <div>
        {allQuestions
          .filter((question) => {
            if (search === "") {
              return question;
            } else if (
              question.question.toLowerCase().includes(search.toLowerCase())
            ) {
              return question;
            }
          })
          .map((question) => (
            <div key={question.post_id}>
              <hr />
              <Link
                to={`questions/${question.post_id}`}
                className="text-decoration-none text-reset"
              >
                <Question
                  question={question.question}
                  userName={question.user_name}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
