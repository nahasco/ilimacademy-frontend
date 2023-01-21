import { useState } from 'react'
import { Button } from '../components/Button'
import HeaderMain from '../components/Layout/Header'
import useStore from "../stores/userStore";
import Layout from '../components/Layout/Layout'
import { API_URL } from '../config'
import useData from '../stores/useData'
export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const data = useData((state) => state.data.user)
  const token = useStore((state) => state.token)
  const [formData, setFormData] = useState({
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
    email: data.email
  });

  const { first_name, last_name, username, email } = formData;

  function onChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event) {
    setLoading(true)
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/account/update/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: token
        },
          body: JSON.stringify(formData),
      });
      if (response) {setLoading(false)}

      if (response.ok) {
        const data = await response.json();     
        setError("")
      } else {
        const error = await response.json()
        let errorMessage = ""
        for (let key in error){
          console.log(error[key])
          errorMessage = errorMessage + (`${error[key]}\n`)
        }
        setError(errorMessage)
      }

    } catch (error) {
        console.log(error);
        setError("Server Error")
    }
  }

  return (
    <>
      <HeaderMain heading={"Settings"}></HeaderMain>
      {error  && <div className="error my-3">{error}</div>}
      <div className='widget'>
        <div className='widget-header'>
          <div className='widget-title'>Personal information</div>
        </div>
        <div className='widget-content'>
        <form className='p-4 flex flex-col gap-4' onSubmit={onSubmit}>
          <div className='grid grid-cols-5 gap-4 items-center'>
            <label className='col-span-1 flex items-center text-[16px]' htmlFor='name'>
              Name
            </label>
            <div className='col-span-4 flex items-center w-full gap-4'>
              <input 
              value={first_name}
              onChange={onChange}
              className='flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none' 
              name="first_name" type="text" placeholder='first name'>
              </input>
              <input 
              value={last_name}
              onChange={onChange}
              className='flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none' 
              name="last_name" 
              type="text" 
              placeholder='last name'>
              </input>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-4 items-center'>
            <label className='col-span-1 flex items-center text-[16px]' htmlFor='username'>
              Username
            </label>
            <div className='col-span-4 flex items-center w-full gap-4'>
              <input 
              value={username} 
              onChange={onChange}
              className='flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none' 
              name="username" 
              type="text" 
              placeholder='username'>
              </input>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-4 items-center'>
            <label className='col-span-1 flex items-center text-[16px]' htmlFor='email'>
              Email Address
            </label>
            <div className='col-span-4 flex items-center w-full gap-4'>
              <input 
              value={email}
              onChange={onChange}
              className='flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none' 
              name="email" 
              type="email" 
              placeholder='email address'>
              </input>
            </div>
          </div>
          {/* <div className='grid grid-cols-5 gap-4 items-center'>
            <label className='col-span-1 flex items-center text-[16px]' htmlFor='birthdate'>
              Birthdate
            </label>
            <div className='col-span-4 flex items-center w-full gap-4'>
              <input 
              className='flex-1 p-3 bg-[#f4f4f4] rounded-[0.5rem] border-none' 
              name="birthdate" 
              type="date" 
              placeholder='birthdate'>
              </input>
            </div>
          </div> */}
          <div className='text-right mt-5'>
            {loading ? <button>Loading...</button> : <Button buttonStyle={"btn--primary--solid"} buttonSize={"btn--large"}>Save</Button>}
          </div>
          
        </form>
        </div>
      </div>
      
    </>
  )
}

SettingsPage.getLayout = function getLayout(SettingsPage) {
  return (
    <Layout>
      {SettingsPage}
    </Layout>
  )
}