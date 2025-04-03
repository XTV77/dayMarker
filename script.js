const root_ = ReactDOM.createRoot(document.getElementById("root"));
<div className='box'>asd</div>;

let mass = [];

for (let i = 0; i < 61; i++) {
  if ((i + 1) % 7 == 0 || (i + 2) % 7 == 0)
    mass.push(
      <div style={{ border: "2px solid #df1313" }} className='box'></div>
    );
  else mass.push(<div className='box'></div>);
}

let someElement = mass.map((item) => item);

root_.render(someElement);
