const Counter = () => {

    const [count, setCount] = useState(0);
    //Check component rerender
    //console.log(count);

    const increasement = () => {
       //setCount(count + 1);
       //setCount(count + 1);
       //setCount(count + 1);

       setCount ((prev) => prev + 1);
       setCount ((prev) => prev + 1);
       setCount ((prev) => prev + 1);

    };

    const decreasement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

  return (
    <div className="border border-gray-300 p-10 rounded-lg font-mono flex flex-col justify-center items-center gap-5">
        <p className="font-bold text-3xl">Counter : {count}</p>
        <div className="flex gap-4">
            <button onClick={increasement} className="bg-blue-400 px-2 py-1 rounded-lg text-white font-normal">Plus (+) </button>
            <button onClick={decreasement} className="bg-blue-400 px-2 py-1 rounded-lg text-white font-normal">Minus (-) </button>
        </div>
    </div>
  )
}

export default Counter