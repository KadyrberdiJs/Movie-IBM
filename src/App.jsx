import './App.css'

function App() {

  return (
    <>
    <Text league="Premier Leauge"/>
    </>
  )
}


function Text({league}) {
  return (
    <div>
      <h1>{league}</h1>
      <p>Aston Villa vs Liverpool FC</p>
      <p>Arsenal FC vs Burnley</p>
    </div>
  )
}
export default App
