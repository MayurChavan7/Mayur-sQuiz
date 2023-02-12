import React from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../Data/Categories";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  //const history = useHistory();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <>


    
      <div className="content">
        <img src="q.png" className="banner" alt="alternate" />
        <div className="settings">
          <span style={{ fontSize: 20 }}>Quiz Setting</span>

          <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
