const root_ = ReactDOM.createRoot(document.getElementById("root"));

let DaysList = [];
let dayStatus = [
  "",
  "rgb(22, 227, 97)",
  "rgb(251, 255, 24)",
  "rgb(255, 0, 0)",
  "rgb(146, 144, 144)",
  "url(sourse/Kuka.png) center/90% no-repeat"
];

const changeIcon = (elem) => {
  let index = dayStatus.indexOf(elem.target.style.background);
  if (index > dayStatus.length - 1) index = 0;
  elem.target.style.background = dayStatus[index + 1];
};

for (let i = 0; i < 69; i++) {
  if ((i + 1) % 7 == 0 || (i + 2) % 7 == 0)
    DaysList.push(
      <div
        className='box'
        style={{ border: "2px solid #df1313", background: "" }}
        onClick={changeIcon}
      ></div>
    );
  else
    DaysList.push(
      <div
        className='box'
        style={{ background: "" }}
        onClick={changeIcon}
      ></div>
    );
}

let calendar = DaysList.map((item) => item);
uploadData(calendar);
root_.render(calendar);

//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#//#

function updateData() {
  const checkBoxes = document.querySelectorAll(".box");
  let marks = [];
  checkBoxes.forEach((item) => marks.push(item.style.background));
  localStorage.setItem("calendar", JSON.stringify(marks));
}
function uploadData(_list) {
  const marks = JSON.parse(localStorage.getItem("calendar"));
  _list.forEach((item, index) => (item.props.style.background = marks[index]));
}
