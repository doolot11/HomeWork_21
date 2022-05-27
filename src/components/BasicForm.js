import { useEffect, useState } from "react"

export const BasicForm = (props) => {
  const [enteredFirstName,setEnteredFirstName] = useState('')
  const [enteredLastName,setEnteredLastName] = useState('')
  const [enteredAdress,setEnteredAdress] = useState('')
  const [nameTouched,setNameTouched] = useState(false)
  const [lasttouch,setLastIsTouch] = useState(false)
  const [AdressTouch, setAdressTouch] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)
  

  const enteredNameIsValid = enteredFirstName.trim() !== '' 
  const nameInputIsValid = !enteredNameIsValid && nameTouched

  const AdressIsValid = enteredAdress.trim() !== '' && enteredAdress.includes('@')
  const AdressInputIsValid = !AdressIsValid && AdressTouch

  const lastNameisValid = enteredLastName.trim() !== ''
  const lastIsValid = !lastNameisValid && lasttouch

  useEffect(()=>{
    if(enteredNameIsValid){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }
  },[enteredNameIsValid])
  

  const firstNameHandler=(event)=>{
    setEnteredFirstName(event.target.value)
  }
  const inputOnBlurHandler=()=>{
          setNameTouched(true)
  }

  const lastNameHandler=(event)=>{
    setEnteredLastName(event.target.value)
  }
  const lastInputBlur=()=>{
    setLastIsTouch(true)
  }

  const adressHandler=(event)=>{
    setEnteredAdress(event.target.value)
  }
  const AdressBlur =()=>{
    setAdressTouch(true)
  }

  const formSubmitHandler = (e) =>{
     e.preventDefault()
     if(!nameInputIsValid){
      setNameTouched(true)
     }
     if(!AdressIsValid){
      setAdressTouch(true)
     }
     if(!lastNameisValid){
      setLastIsTouch(true)
     }
  }


const inputClasses = nameInputIsValid  ? 'form-control invalid' : 'form-control' 
const lastClasses = lastIsValid ?  'form-control invalid' : 'form-control'
const AdressClass = AdressInputIsValid ? 'form-control invalid'  : 'form-control'
  return (
    <form onSubmit={formSubmitHandler} >
      <div className='control-group'>
        <div className={inputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' 
          onChange={firstNameHandler} 
          value={enteredFirstName}
          onBlur={inputOnBlurHandler}/>
          {nameInputIsValid && <p>write some value</p>}
        </div>
        <div className={lastClasses} >
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' 
          onChange={lastNameHandler}
          onBlur={lastInputBlur}
          value={enteredLastName}/>
        </div>
      </div>
      <div className={AdressClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
        onChange={adressHandler}
        value={enteredAdress}
        onBlur={AdressBlur}
        />
        {AdressInputIsValid && <p>write symbol (@)</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

