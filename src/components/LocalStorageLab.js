import React from 'react'
import useLocalStorage from '../hooks/localStorage'

function LocalStorageLab() {
  const [name, setName] = useLocalStorage('name', 'Bob')
  return (
    <div>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default LocalStorageLab
