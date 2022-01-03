import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import IPage from "../interfaces/page";
import { Plus } from "@styled-icons/fa-solid/Plus";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import firebase from "firebase";
import { auth } from "../config/firebase";
import axios from "axios";
import thumbnails from "./../config/thumbnails";

const GridContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-rows: auto auto 80%;
  padding: 10px 15px 10px 15px;
  box-sizing: border-box;
`;

const TitleText = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 122.02%;
  text-align: left;
  margin-top: 10px;
`;

const Text = styled.div`
  margin-top: 10px;
`;

const DateText = styled.div`
  margin-top: 10px;
`;

const LikeIcon = styled(HeartFill)`
  width: 41px;
  height: 41px;
  color: ${(props) => {
    return props.theme.historyHeartColor;
  }};
  margin-top: 3px;
`;

const DisLikeIcon = styled(Plus)`
  width: 30px;
  height: 40px;
  color: #d36060;
  transform: rotate(-45deg);
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;

  & > svg {
    width: 33px;
    height: 33px;
  }
`;

const HistoryContainer = styled.div`
  overflow: auto;
  display: grid;
  grid-gap: 15px;
  grid-auto-rows: 80px;
`;

const HistoryCard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 80px;
  color: #dfdfdf;
  border-radius: 10px;
  background-color: ${(props) => {
    return props.theme.historyCardBackground;
  }};
`;

const ImageContainer = (props: any) => {
  const Image = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${props.url});
      background-position: center;
      background-size: cover;
      filter: brightness(0.65);
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

  return (
    <>
      <Image>
        <div className="inside">{props.text}</div>
      </Image>
    </>
  );
};

let dLikeCollection = firebase.firestore().collection("/dlike");

function HistoryList() {
  //let dlikedSports: any[] = [];

  const [dlikedSports, setDlikedSports] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      if (dlikedSports.length != 0) return;

      let hashdlikedSports: any[] = [];
      await dLikeCollection
        .orderBy("date")
        .get()
        .then((snapshot: any) => {
          snapshot.forEach((snap: any) => {
            if (snap.get("userId") === auth.currentUser?.uid)
              hashdlikedSports.push({
                name: snap.get("name"),
                action: snap.get("action"),
                img: snap.get("img"),
              });
          });
        });

      setDlikedSports(hashdlikedSports);
    })();
  });

  return (
    <>
      {dlikedSports.map((s: any, i) => (
        <HistoryCard key={i} className="Card Test">
          <ImageContainer url={s["img"]} text={s["name"]} />

          <IconContainer>
            {s["action"] === "Like" ? <LikeIcon /> : <DisLikeIcon />}
          </IconContainer>
        </HistoryCard>
      ))}
    </>
  );
}

const History: React.FunctionComponent<IPage> = () => {
  return (
    <GridContent>
      <TitleText className="title">History</TitleText>
      <Text className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <HistoryContainer>
        <HistoryList />
      </HistoryContainer>
    </GridContent>
  );
};

export default History;
