import './App.css';
import Simpsons from "./components/character-1.1/Simpsons";
import Discribe from "./components/character-1.2/Discribe";
import DiscribeCharachter from "./components/character-1.2/DiscribeCharachter";
// import Buttons from "./components/lesson1tasks/Buttons";

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

const simps  = [
  {
    name: 'Гомер',
    sImage: 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
    description: 'Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield. He is the spouse of Marge\n' +
        '//     Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and\n' +
        '//     often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and\n' +
        '//     even bravery to those he cares about and, sometimes, even others he doesn\'t.'
  },
  {
    name: 'Барт',
    sImage: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
    description: 'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)[7]is the mischievous, ' +
        'rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The ' +
        'Simpsons.'
  },
  {
    name: 'Ліза',
    sImage: 'https://static.wikia.nocookie.net/simpsons/images/d/d9/IMG_6090.gif',
    description: 'Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child\n' +
        ' of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons\n' +
        ' series.'
  },
  {
    name: 'Гомер',
    sImage: 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
    description: 'Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield. He is the spouse of Marge\n' +
        '//     Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and\n' +
        '//     often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and\n' +
        '//     even bravery to those he cares about and, sometimes, even others he doesn\'t.'
  },
  {
    name: 'Гомер',
    sImage: 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
    description: 'Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield. He is the spouse of Marge\n' +
        '//     Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds)[41], lazy, and\n' +
        '//     often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and\n' +
        '//     even bravery to those he cares about and, sometimes, even others he doesn\'t.'
  },
]

function App() {
  return (
    <div className="App">
      {/*<Buttons/>*/}
      <Simpsons simpsonsData={simps}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Task 2</h2>
      <br/>
      <br/>
      <DiscribeCharachter props={Discribe}/>
      {/*<Buttons/>*/}
    </div>
  );
}

export default App;
