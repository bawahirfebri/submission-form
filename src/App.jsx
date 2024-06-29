import './App.css'

function App() {

  return (
    <>
      <div className="submission-form">
        <h1>form</h1>
        <form action="">
          <label htmlFor="firstname">first name</label>
          <input type="text" name="firstname" />
          <label htmlFor="lastname">last name</label>
          <input type="text" id="lastname" />
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
          <label htmlFor="contact">contact</label>
          <input type="text" id="contact" />
          <label htmlFor="url">url</label>
          <input type="url" id="url"/>
          <label htmlFor="about">about</label>
          <textarea id="about"></textarea>
        </form>
      </div>
    </>
  )
}

export default App
