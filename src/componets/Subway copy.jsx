import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import sarea from "./getcode.json"
import getdata from "./getcode.json"
import TailSelect from '../UI/TailSelect'

export default function Subway() {
    const [tags, setTags] = useState([]);
    const [data, setData] = useState();
    const refSel = useRef();

    let tm = sarea.map(item => item["측정소"]);
    tm = ["---측정소 선택---", ...tm];

    const handleChange = () => {
        console.log(refInfo.current.value)
    }

    const handleClick = (option) => {
        if(refInfo.current.value == "---측정소 선택---"){
            alert("측정소를 선택해주세용");
            refInfo.current.focus();
            return;
        }
    }


    // const getFetchData = async () => {
    //     const mvApikey = import.meta.env.VITE_APP_API_KEY;
    //     let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`
    //     url = `${url}serviceKey=${mvApikey}&pageNo=1&numOfRows=5&resultType=json&controlnumber=${}&areaIndex=${tm}`;

  return (
    <div>
      
    </div>
  )
}