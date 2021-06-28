import React from 'react'

import { Dropdown, Input, button } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Malaria' },
  { key: 'ax', value: 'ax', text: 'Dengue' },
  { key: 'al', value: 'al', text: 'COVID SARS' },
  { key: 'dz', value: 'dz', text: 'Typhoid' },
  { key: 'as', value: 'as', text: 'Tubercolosis' },
  { key: 'ad', value: 'ad', text: 'Erectile Dysfunction' },
  { key: 'ao', value: 'ao', text: 'Kidney Stone' },
  { key: 'ai', value: 'ai', text: 'HIV AIDS' },
  { key: 'ag', value: 'ag', text: 'Scabies' },
]

const cityOptions = [
  {key: 'mum', value: 'mum', text: 'Mumbai'},
  {key: 'bh', value: 'bh', text: 'Bhopal'},
  {key: 'amh', value: 'amh', text: 'Ahmedabad'},
  {key: 'nd', value: 'nd', text: 'New Dehli'},
  {key: 'vr', value: 'vr', text: 'Varanasi'},
  {key: 'ch', value: 'ch', text: 'Chennai'},
]

  const Topinfo = () => {
    return(
      <div>
        <h3>Please enter appropriate medical condition and location</h3>
      <div className="inputs">
      
      <span id = "disease">
      <Dropdown
      placeholder='Condition'
      className='diseaseDrop'
      //fluid
      search
      selection
      options={countryOptions}
    />
    </span>
      
    <span id = "location">
    <Dropdown
    placeholder='Location'
    
    search
    selection
    options={cityOptions}
    />
    </span>
    <span id="submit">
    <button class="ui button" type="submit">Submit</button>
    </span>
    </div>
    </div>


    
    )
}

export default Topinfo