import React, { useState } from 'react';
import axios from "axios";

export default function App() {
  const [topic, setTopic] = useState("");
  const [material, setMaterial] = useState("");
  const [quiz, setQuiz] = useState("");
  const [language, setLanguage] = useState("en");
  const [translated, setTranslated] = useState("");

  const getMaterial = async () => {
    const res = await axios.post("https://edugenie-backend.onrender.com/material", {
      topic: "physics"
    });


    const generateQuiz = async () => {
      const res = await axios.post("https://edugenie-backend.onrender.com/quiz", {
        topic: "math"
      });


      const translate = async () => {
        const res = await axios.post("https://edugenie-backend.onrender.com/translate", {
          text: "Hello World",
          targetLang: "hi"
        });
        return (
          <div style={{ padding: 20 }}>
            <h1>EduGenie AI App</h1>
            <input
              type="text"
              placeholder="Enter topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{ padding: 8, width: "100%", marginBottom: 10 }}
            />
            <button onClick={getMaterial}>Get Material</button>
            <button onClick={generateQuiz} style={{ marginLeft: 10 }}>
              Generate Quiz
            </button>

            {material && (
              <div style={{ marginTop: 20 }}>
                <h2>Study Material</h2>
                <p>{material}</p>
              </div>
            )}

            {quiz && (
              <div style={{ marginTop: 20 }}>
                <h2>Quiz</h2>
                <pre>{quiz}</pre>
              </div>
            )}

            <div style={{ marginTop: 20 }}>
              <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="kn">Kannada</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
              </select>
              <button onClick={translate} style={{ marginLeft: 10 }}>
                Translate
              </button>
            </div>

            {translated && (
              <div style={{ marginTop: 20 }}>
                <h2>Translated Material</h2>
                <p>{translated}</p>
              </div>
            )}
          </div>
        );
      }
    }
  }
}
