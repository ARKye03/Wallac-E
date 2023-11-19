import React, { useState } from 'react';

// eslint-disable-next-line react/function-component-definition
const Hulk: React.FC = () => {
  const [text, setText] = useState('> ');
  const [expressions, setExpressions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (!value.startsWith('> ')) {
      setText(`> ${value}`);
    } else {
      setText(value);
    }
  };

  const fetchData = async (expression: string) => {
    try {
      const response = await fetch(
        `http://localhost:5106/Hello?expression=${encodeURIComponent(
          expression,
        )}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        const data = await response.text();
        return data;
      }
      throw new Error('Network response was not ok.');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch data:', error);
      return 'd';
    }
  };
  const handleKeyPress = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      let expression = text;
      if (text.startsWith('> ')) {
        expression = text.slice(2); // Remove '> ' from the start of the text
      }
      try {
        const result = await fetchData(expression);
        setExpressions((prevExpressions) => [...prevExpressions, text, result]);
        setText('> ');
      } catch (err) {
        // console.error(err);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between mt-6">
      <div className="flex-col overflow-auto p-4 scroll-smooth max-w-4xl scrollbar-hide">
        {expressions.map((expression, index, arr) => {
          if (index % 2 === 0) {
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`p-2 cursor-default rounded transition-colors duration-200 ${
                  index % 4 === 0
                    ? 'text-slate-400 hover:bg-slate-500'
                    : 'text-white hover:bg-slate-600'
                }`}
              >
                <p>{expression}</p>
                <p>{arr[index + 1]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex justify-center items-center md:flex-col mb-10">
        <textarea
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="text-white w-[750px] items-center flex rounded-lg resize-none min-h-[48px] bg-[#363a4f] hover:bg-slate-600 transition duration-200 px-2 py-2 focus:outline-none"
          placeholder="Send some expressions"
        />
      </div>
    </div>
  );
};

export default Hulk;
