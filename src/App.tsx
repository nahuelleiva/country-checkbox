import { useState } from 'react';
import './App.css';

type Country = {
  id: number,
  name: string
};

const countries = [
  {
    id: 1,
    name: 'India'
  },
  {
    id: 2,
    name: 'USA'
  },
  {
    id: 3,
    name: 'France'
  }
] satisfies Country[];

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const areAllCountriesSelected = selectedCountries.length === countries.length;

  return (
    <>
      <ul>
        <li key={'selectAll'}>
          <label htmlFor='selectAll'>
            <input 
              id='selectAll'
              type="checkbox" 
              checked={areAllCountriesSelected} 
              onChange={() => {
                setSelectedCountries(areAllCountriesSelected ? [] : countries);
              }}
            />
            Select All
          </label>
        </li>
        {
          countries.map((country) => {
            const isSelected = selectedCountries.find(({id})=> country.id === id) !== undefined;

            return (
              <li key={country.id}>
                <label htmlFor={country.name}>
                  <input 
                    id={country.name}
                    type="checkbox" 
                    checked={isSelected}
                    onChange={() => {
                      if(isSelected) {
                        setSelectedCountries(selectedCountries.filter(({id}) => country.id !== id));
                      } else {
                        setSelectedCountries([...selectedCountries, country]);
                      }
                    }}
                  /> {country.name}
                </label>
              </li>
            );
          })
        }
      </ul>
    </>
  )
}

export default App
