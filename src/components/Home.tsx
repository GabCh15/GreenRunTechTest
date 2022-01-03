import React, { useContext, useEffect, useState } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { Moon } from "@styled-icons/heroicons-solid/Moon";
import { WeatherSunny } from "@styled-icons/fluentui-system-filled/WeatherSunny";
import { Plus } from "@styled-icons/fa-solid/Plus";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { AppContext } from "../context/appcontext";
import { animated, interpolate, useSprings } from "react-spring";
import { useGesture } from "react-use-gesture";
import axios from "axios";
import firebase from "firebase";
import { auth } from "./../config/firebase";
import thumbnails from "./../config/thumbnails";
import IconoInmortal from "./IconoInmortal";

let dLikeCollection = firebase.firestore().collection("/dlike");

const ThemeSwitcher = styled.div`
  background: ${(props) => {
    return props.theme.palette.main.fondo;
  }};
  backdrop-filter: blur(20px);
  border-radius: 18px;
  width: 55px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 22px;
  right: -16px;
`;

const Category = styled.span`
  position: relative;
  backdrop-filter: blur(20px);
  border-radius: 18px;
  width: 55px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -789px;
  top: -182px;
`;

const CategoryIcon = styled.span`
  width: 80%;
  height: 80%;
  color: black;
  border-radius: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.span`
  position: relative;
  bottom: -173px;
  right: -406px;
  width: 406px;
  padding-top: 65px;
  height: 125px;
  background: linear-gradient(
    360deg,
    #000000 0%,
    #000000 58.85%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 0px 0px 20px 20px;
  text-align: left;
  box-sizing: border-box;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const TitleText = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 122.02%;
  margin-top: 20px;
  margin-left: 16px;
  color: white;
`;

const DeckContainer = styled.div`
  position: fixed;
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 50%;
  left: -230px;
  & > div {
    grid-column-start: 1;
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > div {
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 406px;
    height: 100%;
    cursor: pointer;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const DlikeIconContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 113%;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  right: 23px;
`;

const LikeIconContainer = styled.div`
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  cursor: pointer;
  width: 81px;
  height: 81px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DisLikeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  border-radius: 100%;
  width: 51px;
  height: 51px;
  cursor: pointer;
`;

const LikeIcon = styled(HeartFill)`
  width: 41px;
  height: 41px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 3px;
`;

const DisLikeIcon = styled(Plus)`
  width: 30px;
  height: 40px;
  color: #d36060;
  transform: rotate(-45deg);
`;

var dlike = true;

const ImagenAnimation = (props: any) => {
  const context = useContext(AppContext);

  const Imagen = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;

    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${props.json.img});
      background-position: center;
      background-size: cover;
      filter: brightness(0.5);
      border-radius: 10px;
    }

    & .inside {
      position: relative;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      text-align: left;
      margin-left: 10px;
    }
  `;

  useEffect(() => {
    // /*
    setTimeout(() => {
      context.expand?.set(false);
    }, 2500);
    // */
  });
console.log(dlike,'Dlike')
  if (dlike) {
    return (
      <Imagen>
      <div className="inside">
        <DisLikeIconContainer>
          <DisLikeIcon />
        </DisLikeIconContainer>
      </div>
    </Imagen>
    );
  }

  return (
    <Imagen>
      <div className="inside">
        <LikeIconContainer>
          <LikeIcon />
        </LikeIconContainer>
      </div>
    </Imagen>
  );
};

var status: boolean = true;

function shuffle(arr: any[]) {
  for (let n = arr.length - 1; n > 0; n--) {
    const k = Math.floor(Math.random() * (n + 1));
    [arr[n], arr[k]] = [arr[k], arr[n]];
  }
}

const jsonDeportes = { sports: [] };

const to = (i: any) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i: any) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

var focusElement: any;

function Deck() {
  const [deportes, setDeportes] = useState<any[]>([]);
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(deportes.length, (i: any) => ({
    ...to(i),
    from: from(i),
  }));
  useEffect(() => {
    if (jsonDeportes.sports.length === 0) {
      (async () => {
        const res = await axios.get(
          "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
        );
        jsonDeportes.sports = res.data.sports;
      })();
    }

    (async () => {
      var dlikedSports = new Set();
      await dLikeCollection.get().then((snapshot: any) => {
        snapshot.forEach((snap: any) => {
          if (snap.get("userId") == auth.currentUser?.uid)
            dlikedSports.add(snap.get("name"));
        });
      });

      if (
        deportes.length === 0 &&
        !(dlikedSports.size >= jsonDeportes.sports.length)
      ) {
        let imagenesHash: any[] = [];

        for (let sp of jsonDeportes.sports) {
          if (!dlikedSports.has(sp["strSport"])) {
            if (sp["strSport"] in thumbnails) {
              sp["strSportThumb"] = thumbnails[sp["strSport"]];
            }
            if (sp["strSportThumb"] !== undefined) {
              imagenesHash.push({
                img: sp["strSportThumb"],
                icon: sp["strSportIconGreen"],
                name: sp["strSport"],
              });
            }
          }
        }

        //imagenesHash.reverse();
        shuffle(imagenesHash);

        if (imagenesHash.length)
          focusElement = imagenesHash[imagenesHash.length - 1];
        setDeportes(imagenesHash);
        //console.log(imagenesHash)
        //console.log(props)
      }
    })();
  });
  console.log(jsonDeportes.sports);

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) {
        gone.add(index);
        console.log("Focus Card:", index);
        console.log(deportes);

        if (index - 1 > -1) focusElement = deportes[index - 1];
        else focusElement = undefined;

        if (dir === 1 && velocity) {
          dLikeCollection
            .add({
              userId: auth.currentUser?.uid,
              name: deportes[index]["name"],
              action: "Like",
              date: new Date(),
              img: deportes[index]["img"],
            })
            .then(function (docRef: any) {})
            .catch(function (error: Error) {});
        } else if (dir === -1 && velocity) {
          dLikeCollection
            .add({
              userId: auth.currentUser?.uid,
              name: deportes[index]["name"],
              action: "Dislike",
              date: firebase.firestore.Timestamp.fromDate(new Date()),
              img: deportes[index]["img"],
            })
            .then(function (docRef: any) {})
            .catch(function (error: Error) {});
        }
      }

      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        return {
          x,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
        //return <div></div>
      });
    }
  );

  return (
    <>
      {props.map(({ x, y }, i) => (
        <animated.div
          key={`deck${i}`}
          id={deportes[i]["name"]}
          style={{
            transform: interpolate(
              [x, y],
              (x: any, y: any) => `translate3d(${x}px,0,0)`
            ),
          }}
        >
          <Category>
            <CategoryIcon
              style={{ backgroundImage: `url(${deportes[i]["icon"]})` }}
            />
          </Category>
          <TextContainer>
            <TitleText>{deportes[i]["name"]}</TitleText>
          </TextContainer>

          <animated.div
            key={`deck${i}`}
            {...bind(i)}
            style={{ backgroundImage: `url(${deportes[i]["img"]})` }}
          />
        </animated.div>
      ))}
    </>
  );
}

const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
  const context = useContext(AppContext);

  if (context.expand?.get) {
    return (
      <>
        <ImagenAnimation json={focusElement} />
      </>
    );
  }

  return (
    <>
      <DeckContainer key="DeckContainer1">
        <Deck key="MyDeck01" />
      </DeckContainer>

      <ThemeSwitcher>
        <IconoInmortal />
      </ThemeSwitcher>

      <DlikeIconContainer>
        <DisLikeIconContainer
          onClick={() => {
            dlike = true;

            dLikeCollection
              .add({
                userId: auth.currentUser?.uid,
                name: focusElement["name"],
                action: "Dislike",
                date: new Date(),
                img: focusElement["img"],
              })
              .then(function (docRef: any) {})
              .catch(function (error: Error) {});

            const l = focusElement["name"];
            const elem = document.getElementById(l);
            if (elem !== null) elem.remove();

            context.expand?.set(true);
          }}
        >
          <DisLikeIcon />
        </DisLikeIconContainer>
        <LikeIconContainer
          onClick={() => {
            dlike = false;

            dLikeCollection
              .add({
                userId: auth.currentUser?.uid,
                name: focusElement["name"],
                action: "Like",
                date: new Date(),
                img: focusElement["img"],
              })
              .then(function (docRef: any) {})
              .catch(function (error: Error) {});

            const l = focusElement["name"];
            const elem = document.getElementById(l);
            if (elem !== null) elem.remove();

            context.expand?.set(true);
          }}
        >
          <LikeIcon />
        </LikeIconContainer>
      </DlikeIconContainer>
    </>
  );
};

export default Home;
