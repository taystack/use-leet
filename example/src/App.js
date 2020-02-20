import React, { useState } from "react";
import { useLeet } from "@taystack/use-leet";


const CustomValue = ({ from, to, index, onRemove }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
  }}>
    from&nbsp;<code>{from}</code>&nbsp;into&nbsp;<code>{to}</code>&nbsp;<div onClick={onRemove}>remove</div>
  </div>
);

const App = () => {
  const [customMap, setCustomMap] = useState({});
  const [customValues, setCustomValues] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue, leet] = useLeet("I just owned a bunch of noobs\ndude, you are all my dudes and dudettes\nyour zebra was fired and banned over dope hacks\nunique, new york\nget off my lawn\nthe internet is a series of tubes\nthe answer is 42", customMap);

  const handleRemove = index => {
    const newValues = [];
    customValues.forEach((cv, i) => {
      if (index !== i) newValues.push(cv);
    });
    setCustomValues(newValues);
    setCustomMapFromValues(newValues);
  };

  const handleChange = (event, setter) => {
    setter(event.target.value[0]);
  }

  const setCustomMapFromValues = (newValues) => {
    const newMap = {};
    newValues.forEach(cv => { newMap[cv.from] = cv.to; });
    setCustomMap(newMap);
  }

  const handleAdd = () => {
    if (from && from.length && to && to.length) {
      const newValues = [...customValues, { from, to }];
      setCustomValues(newValues);
      setFrom("");
      setTo("");
      setCustomMapFromValues(newValues);
    }
  }

  return (
    <>
    <div style={{
      padding: 50,
      fontSize: 16,
    }}>
      <textarea
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{
          fontSize: 16,
          minWidth: 500,
          minHeight: 200,
        }}
      />

      <div style={{ paddingTop: 20 }}>
        <pre>{leet}</pre>
      </div>


      <div style={{ paddingTop: 20 }}>Set custom values:</div>
      change <input value={from} onChange={event => handleChange(event, setFrom)} />
      to <input value={to} onChange={event => handleChange(event, setTo)} />
      <button onClick={handleAdd}>add</button>
      {customValues.map((cv, index) => <CustomValue key={cv.from} from={cv.from} to={cv.to} index={index} onRemove={() => handleRemove(index)} />)}

    </div>
    </>
  );
}
export default App
