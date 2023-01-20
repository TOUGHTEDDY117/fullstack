import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Header = ({ text }) => <h1>{text}</h1>;
const Statistic = ({ text, value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};

const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad

const average = () => (good - bad) / total;
const positive = () => (good / total) * 100 + '%';

return (
  <table>
    <tbody>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={total} />
      <Statistics text='average' value={average()} />
      <Statistics text='positive' value={positive()} />
    </tbody>
  </table>
);
}
const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header text={'give feedback'} />
      <Button onClick= {handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      

    </div>
  );
}

export default App;