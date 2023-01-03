import Header from "./Header";

const App = () => {
    const course = 'Half Stack application development';
    
    return (
      <div>
        <Header course={course} />
        <Content />
        <Total />
      </div>
    )
}

export default App;