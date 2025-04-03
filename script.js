const root_ = ReactDOM.createRoot(document.getElementById("root"));
<div className='box'>asd</div>;

let DaysList = [];
let dayStatus = ["url(sourse/Kuka.png) center/90% no-repeat"];

const changeIcon = (elem) => {
  elem.target.style.background = dayStatus[0];
};

for (let i = 0; i < 61; i++) {
  if ((i + 1) % 7 == 0 || (i + 2) % 7 == 0)
    DaysList.push(
      <div
        style={{ border: "2px solid #df1313" }}
        className='box'
        onClick={changeIcon}
      ></div>
    );
  else DaysList.push(<div className='box'></div>);
}

let calendar = DaysList.map((item) => item);
root_.render(calendar);
