import {useState} from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange = { (event) => setLocation(event.target.value) }
          value={location}
          placeholder="Location"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
