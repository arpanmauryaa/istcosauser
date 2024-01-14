import React from 'react';

function Hii() {
  const fun = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
  };

  return (
    <div>
      <select onChange={fun} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

export default Hii;

