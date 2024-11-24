import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocalStorageState } from "../hook/useLocalStorageState";

const animation = [
  {
    id: 1,
    label: "宇宙兄弟",
    characters: [
      { id: 1, label: "南波六太" },
      { id: 2, label: "南波日々人" },
      { id: 3, label: "伊東せりか" },
      { id: 4, label: "吾妻滝生" },
      { id: 5, label: "古谷やすし" },
      { id: 6, label: "北村絵名" },
      { id: 7, label: "真壁ケンジ" },
      { id: 8, label: "紫三世" },
      { id: 9, label: "オリガ・トルスタヤ" },
      { id: 10, label: "エミーリア・トルスタヤ" },
    ],
  },
  {
    id: 2,
    label: "ワンピース",
    characters: [
      { id: 1, label: "モンキー・D・ルフィ" },
      { id: 2, label: "ロロノア・ゾロ" },
      { id: 3, label: "ナミ" },
      { id: 4, label: "ウソップ" },
      { id: 5, label: "サンジ" },
      { id: 6, label: "トニートニー・チョッパー" },
      { id: 7, label: "ニコ・ロビン" },
      { id: 8, label: "フランキー" },
      { id: 9, label: "ブルック" },
      { id: 10, label: "ジンベエ" },
    ],
  },
  {
    id: 3,
    label: "ハンターハンター",
    characters: [
      { id: 1, label: "ゴン" },
      { id: 2, label: "キルア" },
      { id: 3, label: "クラピカ" },
      { id: 4, label: "レオリオ" },
      { id: 5, label: "ヒソカ" },
      { id: 6, label: "イルミ" },
      { id: 7, label: "クロロ" },
      { id: 8, label: "ネテロ" },
      { id: 9, label: "メルエム" },
    ],
  },
  {
    id: 4,
    label: "進撃の巨人",
    characters: [
      { id: 1, label: "エレン・イェーガー" },
      { id: 2, label: "ミカサ・アッカーマン" },
      { id: 3, label: "アルミン・アルレルト" },
      { id: 4, label: "リヴァイ・アッカーマン" },
      { id: 5, label: "ヒストリア・レイス" },
      { id: 6, label: "ジャン・キルシュタイン" },
      { id: 7, label: "コニー・スプリンガー" },
      { id: 8, label: "サシャ・ブラウス" },
      { id: 9, label: "アニ・レオンハート" },
    ],
  },
  {
    id: 5,
    label: "ハイキュー!!",
    characters: [
      { id: 1, label: "日向翔陽" },
      { id: 2, label: "影山飛雄" },
      { id: 3, label: "及川徹" },
      { id: 4, label: "西谷夕" },
      { id: 5, label: "月島蛍" },
      { id: 6, label: "菅原孝支" },
      { id: 7, label: "山口忠" },
      { id: 8, label: "東峰旭" },
      { id: 9, label: "澤村大地" },
      { id: 10, label: "東峰旭" },
    ],
  },
  {
    id: 6,
    label: "呪術廻戦",
    characters: [
      { id: 1, label: "虎杖悠仁" },
      { id: 2, label: "釘崎野薔薇" },
      { id: 3, label: "伏黒恵" },
    ],
  },
];
const SelectAnimation = () => {
  // ローカルストレージ
  const [value, setLocalStrage] = useLocalStorageState({}, "selectedAnimation");
  // 選択されたアニメ
  const [selectedAnimation, setSelectedAnimation] = React.useState(
    value ? value.animation : {}
  );
  // 選択されたアニメのキャラクター
  const [selectedCharacters, setSelectedCharacters] = React.useState([]);
  // 選択されたキャラクター
  const [selectedCharacter, setSelectedCharacter] = React.useState(
    value ? value.character : null
  );

  return (
    <>
      <p>
        選択されたアニメ:{" "}
        {selectedAnimation ? selectedAnimation.label : "未選択"}
      </p>
      <p>アニメを選択してください</p>
      <div style={{ display: "flex", gap: "16px" }}>
        <Autocomplete
          disablePortal
          options={animation}
          getOptionLabel={(option) => option.label}
          value={selectedAnimation}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="アニメ" />}
          onChange={(event, value) => {
            console.log(value);
            // setSelectedAnimation({ id: value.id, label: value.label });
            setSelectedAnimation(value);
            setSelectedCharacters(value ? value.characters : []);
            setSelectedCharacter(null);
          }}
        />
        <Autocomplete
          disablePortal
          options={selectedCharacters}
          // getOptionLabel={(option) => option.label}
          value={selectedCharacter}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="キャラクター" />
          )}
          onChange={(event, value) => {
            setSelectedCharacter(value);
            setLocalStrage({ animation: selectedAnimation, character: value });
          }}
        />
      </div>
    </>
  );
};

export default SelectAnimation;
