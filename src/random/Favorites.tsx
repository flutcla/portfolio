import { useState } from "react";

interface FavoritesProps {
  count: number
}

export const Favorites = ({count}: FavoritesProps) => (
  <>
    {pickFavs(Math.min(count, favs.length))}
  </>
)

type Fav = [string, string, string]

const favs: Array<Fav> = [
  ["Cat1", "Ans1", "Desc1"],
  ["Cat2", "Ans2", "Desc2"],
  ["Cat3", "Ans3", "Desc3"],
  ["Cat4", "Ans4", "Desc4"],
  ["Cat5", "Ans5", "Desc5"],
  ["Cat6", "Ans6", "Desc6"],
]

function shuffle<T>(ar: Array<T>) {
  let ret = ar;
  for (let i = ret.length; 1 < i; i--) {
    let k = Math.floor(Math.random() * i);
    [ret[k], ret[i - 1]] = [ret[i - 1], ret[k]];
  }
  return ret;
}

let ar = shuffle(favs);
const pickFavs = (n: number) => {
  return Array.from({length: n}, (v, k) => k).map((i) => {
    const [cat, ans, desc] = ar[i];
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
    return (
      <>
        <p onClick={toggle}>
          好きな{cat} : {ans}<span> </span>
          {visible ? <span>{desc}</span> : <></>}
        </p>
      </>
    );
  })
}
