import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '20px 0', width: '500px' }}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </div>
  );
}

