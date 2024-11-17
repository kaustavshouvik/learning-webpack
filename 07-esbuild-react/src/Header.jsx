import useHeader from './useHeader';

const Header = () => {
  const { count, increment } = useHeader();

  return (
    <div>
      <h3>HEADER</h3>
      <p>COUNT: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Header;
