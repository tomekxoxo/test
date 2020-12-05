// import logo from './logo.svg';
import "./App.css";
import { Map, List, Set } from "immutable";
import moment from "moment";

function App() {
  // const map1 = Map({ a: 1, b: 2, c: 3 });
  // const map2 = map1.set('b', 50);
  // console.log(map1.get('b'), map2.get('b')); // 2 vs. 50
  // const map3 = map2.set('a', 6777);
  // console.log(map3.get('a'));
  // const map4 = Map({ "d": 1, "e": 2 });
  // map4.merge(map3);
  // console.log(map4.get('d'));
  // console.log(map4);
  // const set1 = Set([1, 2, 3, 3]);
  // console.log(set1);
  // const currentDate = moment(`12 2020`, 'MM YYYY');
  // console.log(moment(currentDate).startOf('month'));
  let numOfDays = new Date(2020, 10, 0).getDate();
  const currYear = 2020;
  const currMonth = new Date().getMonth();
  const firstDay = new Date(currYear, currMonth, 1).getDay() ;//indexed from sunday
  console.log(numOfDays);
  console.log(firstDay);
  
  
  return (
    <h1>ASD<p>test</p></h1>
  )
}


export default App;
