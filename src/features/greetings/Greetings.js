import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from './greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  return (
    <div>
      { greeting.isSuccessful ? <h3>{ greeting.greeting.greeting }</h3> : '' }
    </div>
  );
};
export default Greetings;
