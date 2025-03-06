import UserCard from './UserCard.jsx';
import UserList from './UserList.jsx';
import lists from '../userlist.json';
import Counter from './Counter.jsx';

export default function App () {
  const setCount = 
  (setType) => {
    updateCount((nextType) => ({
       ...nextType,
       [setType]:
       nextType[setType] + 1,
    }));
  };
const resetCount = () => {
  updateCount({
   
  })}
  return (
    <>
        <UserCard name="Alica" age="25" city="London" />
        <UserList list={lists} />
        <Counter 
          setCount={setCount}
          resetCount={resetCount}
          updateCount={updateCount}
        />
    </>
      
  );
};

  