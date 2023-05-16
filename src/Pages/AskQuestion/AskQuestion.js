import React, { useContext, useEffect, useState } from "react";
import "./AskQuestion.css";
// import "../Home/Home.css";
// import Question from "../../Components/Question/Question";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export default function AskQuestion() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  // const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const [allQuestions, setAllQuestions] = useState([]);
  //  const navigate = useNavigate();
  const Questions = async () => {
    try {
      const questionRes = await axios.get(
        `http://localhost:4000/api/questions`
      );
      setAllQuestions(questionRes.data.data);
    } catch (err) {
      console.log("problem", err);
    }
  };
  useEffect(() => {
    if (!userData.user) navigate("/login");

    axios
      .get(`${process.env.REACT_APP_base_url}/api/questions`)
      .then((response) => {
        setAllQuestions(response.data.data);
      });

    Questions();
  }, [userData.user, navigate]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4000/api/questions?q=${query}`
  //     );
  //     setData(res.data);
  //   };
  //   fetchUsers();
  // }, [query]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_base_url}/api/questions`, {
        id: userData.user.id,
        question: form.question,
        questionDescription: form.questionDescription,
      });
      navigate("/");
    } catch (err) {
      console.log("problem", err);
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center my-5">
        <h3>Steps to write a good question</h3>
        <ul className="question_steps">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      {/* <input
        className="question_title"
        type="text"
        // name="search"
        Placeholder="Title"
        onChange={(e) => setSearch(e.target.value)}
      /> */}
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-5 question_form  justify-content-between"
      >
        <h3>Ask a public question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>

        <input
          className="question_title"
          type="text"
          name="question"
          placeholder="Title"
          onChange={handleChange}
          // onChange={(e) => setQuery(handleChange)}
        />
        <textarea
          className="question_input"
          placeholder="Question Description..."
          name="questionDescription"
          onChange={handleChange}
        ></textarea>
        <button className="question_post_btn" type="">
          Post Your Question
        </button>
      </form>
      <h3>Questions</h3>

      {/* <div>
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
      </div> */}
    </div>
  );
}
