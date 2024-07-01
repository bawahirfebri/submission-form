import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="submission-container">
        <form action="">
          <p className="form__title-section">choose your payment method</p>
          <div className="form__input-radio">
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">card</label>
            </div>
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">crypto payment</label>
            </div>
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">others</label>
            </div>
          </div>

          <label>select an option</label>
          <div className="form__input-radio">
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">bank transfer</label>
            </div>
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">perfect money</label>
            </div>
            <div className="form__input-radio__item">
              <input type="radio" />
              <label htmlFor="">alternative methods</label>
            </div>
          </div>

          <p className="form__title-section">information</p>
          <label className="form__title-input-file">upload the proof of your payment</label>
          <p className="form__title-desc">ex. bank transfer recipt, btc wallet screenshot etc</p>
          <div className="form__input-file">
            <input type="file" hidden />
            <span className="material-symbols-outlined">add_photo_alternate</span>
            <p>Drop your image or Browse</p>
            <p>PNG/JPG/PDF</p>
          </div>

          <div className="form__input-information">
            <div>
              <label htmlFor="">first name</label>
              <input type="text" placeholder="john" />
            </div>
            <div>
              <label htmlFor="">last name</label>
              <input type="text" placeholder="doe" />
            </div>
            <div>
              <label htmlFor="">email</label>
              <input type="email" placeholder="johndoe@example.com" />
            </div>
            <div>
              <label htmlFor="">select country</label>
              <select name="" id="">
                <option value="">bangladesh</option>
                <option value="">indonesia</option>
                <option value="">malaysia</option>
              </select>
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="password" placeholder="******" />
            </div>
            <div>
              <label htmlFor="">confirm password</label>
              <input type="password" placeholder="******" />
            </div>
          </div>

          <label htmlFor="">transaction id/hash id/batch id</label>
          <input type="text" />

          <label htmlFor="">refered by (optioonal)</label>
          <p className="form__title-desc">kindly submit the email of the person who refered you</p>
          <input type="email" />

          <div className="form__agreement">
            <input type="checkbox" />
            <label htmlFor="">i decleare that i have read and agree with term & condition, disclosure statement & privacy policy</label>
          </div>

          <button>confirm paymen</button>
        </form>
      </div>
    </div>
  );
}

export default App;
