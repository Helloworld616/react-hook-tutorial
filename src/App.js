import './App.css';
import { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {
  const [id, setId] = useState(0)
  const [information, setInformation] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleCreate = (data) => {
    const info = information;
    const result = info.concat({
      ...data,
      id: id
    });

    setId(id + 1);
    setInformation(result);
  }

  const handleRemove = (id) => {
    const info = information;
    setInformation(
      info.filter(i => i.id !== id)
    );
  }

  const handleUpdate = (id, data) => {
    const info = information;
    setInformation(
      info.map(
        i => {
          if (i.id === id) {
            return {
              id,
              ...data,
            }
          }
          return i;
        }
      )
    )
  }

  return (
    <div>
      <PhoneForm onCreate={handleCreate}/>
      <input
        value={keyword}
        onChange={handleChange}
        placeholder="검색..."
      />
      <PhoneInfoList
        data={information.filter(
          info => info.name.indexOf(keyword) > -1
        )}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
