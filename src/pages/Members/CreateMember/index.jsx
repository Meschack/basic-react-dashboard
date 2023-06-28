import { useState } from 'react'
import { useEffect } from 'react'

export const CreateNewMember = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const ruleList = ['writer', 'admin', 'community manager']

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then((response) => response.json())
      .then((data) => data.map((p) => p.name.common).sort())
      .then((p) => {
        setCountries(p)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="member-creating-form">
      <h2 className="form-title">Create a New Member</h2>
      <form action="" method="post">
        <div className="container">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required />
        </div>
        <div className="container">
          <label htmlFor="first-name">First Name(s)</label>
          <input type="text" id="first-name" required />
        </div>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div className="container">
          <div className="container">
            <label>Choose a country</label>
            <select required>
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="container">
            <label htmlFor="city">City</label>
            <input type="text" id="city" required />
          </div>
        </div>

        <div className="container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>

        <div className="container">
          <label htmlFor="rule">Select a rule</label>
          <select required>
            <option value="" disabled>
              Select a rule
            </option>
            {ruleList.map((rule) => (
              <option key={rule} value={rule}>
                {rule.toLocaleUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="button-container container">
          <button type="reset" className="reset-form">
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
