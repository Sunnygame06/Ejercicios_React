import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button type="button" class="btn btn-primary">Primary</button>        <br /> <br />
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
        <br /> <br />

        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br /> <br />

        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
        </div>
        <br /> <br />

        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <br /> <br />

        <div class="card">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
        <br /> <br />

        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
