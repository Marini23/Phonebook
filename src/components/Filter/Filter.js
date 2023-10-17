import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </Label>
  );
};
