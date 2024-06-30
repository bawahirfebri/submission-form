import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="submission-container">
        <form action="">
          <p>choose your payment method</p>
          <div className="form__input-radio">
            <div>
              <input type="radio" />
              <label htmlFor="">card</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">ctypto payment</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">others</label>
            </div>
          </div>

          <p>select an option</p>
          <div className="form__input-radio">
            <div>
              <input type="radio" />
              <label htmlFor="">bank transfer</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">perfect money</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">alternative methods</label>
            </div>
          </div>

          <p>information</p>
          <p>upload the proof of your payment</p>
          <p>ex. bank transfer recipt, btc wallet screenshot etc</p>
          <input type="file" />

          <div className="form__input-information">
            <div>
              <label htmlFor="">first name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">last name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">select country</label>
              <select name="" id="">
                <option value="">banladesh</option>
                <option value="">indonesia</option>
                <option value="">malaysia</option>
              </select>
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="password" />
            </div>
            <div>
              <label htmlFor="">confirm password</label>
              <input type="password" />
            </div>
          </div>

          <label htmlFor="">transaction id/hash id/batch id</label>
          <input type="text" />

          <label htmlFor="">refered by (optioonal)</label>
          <p>kindly submit the email of the person who refered you</p>
          <input type="email" />

          <input type="checkbox" />
          <label htmlFor="">i decleare that i have read and agree with term & condition, disclosure statement & privacy policy</label>

          <button>confirm paymen</button>
        </form>
      </div>
    </div>
  );
}

export default App;
