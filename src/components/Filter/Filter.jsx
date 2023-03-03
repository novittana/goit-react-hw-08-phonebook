import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css'

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div className={css.filter_wrap} >
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </div>
  );
}

