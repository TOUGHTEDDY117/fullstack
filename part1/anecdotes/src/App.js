import { useState } from "react";

const Header = ({ text }) => <h1> {text} </h1>;
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;
const Anecdote = ({anecdote}) => <p> {anecdote} </p>;
const Votes = ({votes}) => <p>has {votes} votes</p>;

const ancedotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 perecnt of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is once as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are by defintion, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];
const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const randomAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length));
      setSelected(randomNumber);
  };
  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
// find the highest value in the array oi votes
  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

    return (
  <div>
    <Header text='Anecdote of the'/>
    <Anecdote anecdote={anecdotes[selected]}/>
    <Votes votes={votes[selected]}/>
    <Button onClick={voteForAnecdote} text='vote'/>
    <Button onClick={randomAnecdote} text='next anecdote'/>
    <Header text='Anecdote with the most votes'/>
    <Anecdote anecdote={winningAnecdote}/>
    <Votes votes={highestVotes}/>
  </div>
);
}
export default App;
