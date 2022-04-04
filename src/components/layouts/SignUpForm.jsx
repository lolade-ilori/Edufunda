import { useState, useEffect } from 'react'
import TextInput from './TextInput'
import ProfileSvg from '../assets/svg/profile.svg'
import MailSvg from '../assets/svg/mail.svg'
import PasswordSvg from '../assets/svg/password.svg'
import HiddenSvg from '../assets/svg/hiddeneye.svg'
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function SignUpForm() {
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const onSelect = (code) => setSelectedCountry(code);
  console.log("SELECT", selectedCountry);

const [phone, setPhone] = useState("");


  const [inputCountry, setInputCountry] = useState(selectedCountry);
  useEffect(() => {
    setInputCountry(selectedCountry);
  }, [selectedCountry])



  return (
    <div className='rightPage-signup'>
      <div className="signup-inner-wrapper">
        <div className="form-header-text">
          <h1>Welcome to Edufunda</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <form>
          <div className="form-inner">
            <div className="input-container-flex">
              <TextInput inputIcon={ProfileSvg} labelName={'First Name'}  inputPlaceholder={'Barley'} inputType={'text'}/>
              <TextInput inputIcon={ProfileSvg} labelName={'Last Name'}  inputPlaceholder={'Johnson'} inputType={'text'}/>
            </div>

            <div className="input-container-flex">
              <ReactFlagsSelect selected={selectedCountry} onSelect={onSelect} searchable  style={{width:'100%'}}/>

                <PhoneInput
                  country={inputCountry.toLowerCase()}
                  value={phone}
                  onChange={phone => setPhone(phone)}
                />
            </div>

            <TextInput inputIcon={MailSvg} labelName={'Email Address'}  inputPlaceholder={'barly@dpainhouse.com'} inputType={'email'}/>

            <TextInput inputIcon={PasswordSvg} labelName={'Password'}  inputPlaceholder={'Enter Password'} inputType={'password'} passwordIcon={HiddenSvg} />

            <TextInput inputIcon={PasswordSvg} labelName={'Confirm Password'}  inputPlaceholder={'Confirm Password'} inputType={'passdword'} passwordIcon={HiddenSvg} />

            <button type="submit" className='cta-btn'>Register</button>
          </div>
        </form>

        <div className="signin-wrapper">
          <p>Have an account? <span><a href="#">Sign in</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm