import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

function HomePage() {
  const [step, setStep] = useState('username')
  const [username, setUsername] = useState('')
  const [securePhrase, setSecurePhrase] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchSecurePhrase = async () => {
    console.log('in fetch securephrase')
    try {
      const response = await fetch('/api/getSecurePhrase')
      console.log('response', response)
      // const data = await response.json()
      setSecurePhrase(data)
    } catch {
      console.log('fail to fetch')
    }

  }
  
  const handleClickContinue = async (username) => {
    setIsLoading(true)
    await fetchSecurePhrase()
    setStep('securePhrase')
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col mx-auto items-center">
      <div className="flex flex-col mx-auto px-96 py-20 space-y-4 bg-cyan-100">
        <h1 className="flex justify-center text-xl font-bold underline">Please enter your credentials</h1>
        { step === 'username' ? 
          <>
            <input value={username} type="text" className="border-2 rounded-md" onChange={() => setUsername(event.target.value)} />
            <button className="bg-blue-500 text-white w-full rounded-2xl mx-auto p-1" onClick={() => handleClickContinue(username)}>Continue</button>
            {/* <button className="bg-blue-500 text-white w-full rounded-2xl mx-auto p-1" onClick={() => mutate()}>Continue</button> */}
          </>
        : step === 'securePhrase' ? 
          <>
            <div className="w-full bg-gray-300 rounded-lg px-auto p-2">
              {/* <p className="text-center">SecurePhrase312</p> */}
              {securePhrase.map((frasaKeselamatan) => {
                return (
                  <div key={frasaKeselamatan.id}>
                    {frasaKeselamatan.text}
                  </div>
                )
              })}
            </div>
            <p>Is this your secure phrase?</p>
            <div className="flex w-full space-x-4">
              <button className="w-1/2 text-center text-white bg-red-600 rounded-md p-1" onClick={() => setStep('username')}>No</button>
              <button className="w-1/2 text-center text-white bg-green-700 rounded-md p-1" onClick={() => setStep('password')}>Yes</button>
            </div>
          </>
        : null }
        { step === 'password' ? 
          <>
            <input type="password" className="border-2 rounded-md" />
            <button className="bg-blue-500 text-white w-full rounded-2xl mx-auto p-1" onClick={() => setStep('success')}>Login</button>
          </>
        : null }
      </div>
    </div>
  )
}
export default HomePage