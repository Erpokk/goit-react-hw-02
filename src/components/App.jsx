
import Description from "./Description/Description"
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";
// Імпорт стилів нормалізації
import "modern-normalize";
import "../index.css";


const App = () => {
    const loadState = () => {
    const savedState = localStorage.getItem('feedbackState');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return {
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  };
  const [values, setValues] = useState(loadState);

  useEffect(() => {
    localStorage.setItem('feedbackState', JSON.stringify(values));
  }, [values]);


  const countTotalFeedback = () => Object.values(values).reduce((acc, value) => acc + value, 0)

    
  const updateFeedback = feedbackType => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1
    }));
  };

  const clearFeedback = () => {
    setValues(prevValues => {
      const clearedValues = Object.keys(prevValues).reduce((acc, key) => {
        acc[key] = 0; // Сбрасываем значение каждого ключа
        return acc;
      }, {});
      return clearedValues;
    });
  };
  


  return (
    <div className="App">
      <Description
        name="Sip Happens Café"
        title="Please leave your feedback about our service by selecting one of the options below."
      />
      
      <Options options={Object.keys(values)} onClick={updateFeedback} total={countTotalFeedback} clear={clearFeedback} />
      {countTotalFeedback() > 0 ? (<Feedback options={values} total={countTotalFeedback} />) : (<Notification>No feedback yet</Notification>)}
      
    </div>
  );
};

export default App;


