import sarea from "../db/sarea.json"
import scode from "../db/scode.json"
import { useRef, useState, useEffect } from "react"

export default function Subway() {
  const [tdata, setTdata] = useState() ;
  const [tags, setTags] = useState() ;

  const refSel = useRef();
  const ops = sarea.map(item => <option key={item["코드"]} value={item["코드"]}>
                                  {item["측정소"]}
                                </option> );

  //화면이 처음 랜더링 될 때 getFetchData 함수를 호출함.
  useEffect(() => {
    getFetchData("201193");
  } , []);
  
  const getFetchData = async (code) => {
    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    url = `${url}serviceKey=${import.meta.env.VITE_APP_API_KEY}`;
    url = `${url}&pageNo=1&numOfRows=10&resultType=json`;
    url = `${url}&controlnumber=${new Date().toISOString().slice(0, 10).replaceAll('-','')}07`;
    url = `${url}&areaIndex=${code}`;

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data.response.body.items.item[0])
  }

  const handleChange = () => {
    getFetchData(refSel.current.value);
  }



  //[tdata]가 바뀔 때 랜더링 함
  useEffect(() => {
    if (!tdata) return ;

    console.log(Object.keys(scode))

    const itemKeys = Object.keys(scode) ;

    let tm = itemKeys.map(item => <div key={item} className="flex flex-col justify-center items-center">
                                    <div className="bg-white border-b text-center
                               border-gray-200
                               hover:bg-gray-50
                              
                               text-black">
                                    {scode[item]["name"]}
                                    </div>
                                    <div className=" text-gray-700 uppercase
                                  bg-gray-50">
                                    ({item})
                                    </div>
                                    <div className="py-2 font-bold text-md text-lime-800
                                                    border border-t-lime-800 w-full">
                                    {tdata[item]}
                                    {tdata[item] != "-" && scode[item]["unit"]}
                                    </div>
                                  </div>);

    setTags(tm);
    // console.log(tdata) ;
  }, [tdata]);
  return (
    <div className="w-full h-full mt-10  flex flex-col justify-start items-center">
      <div className="w-9/10 grid grid-cols-2 gap-4">
        <h1 className="text-2xl font-bold">측정소 선택</h1>
        <select id="sel1"
          onChange={handleChange}
          ref={refSel}
          className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5">
          { ops }
        </select>
      </div>
      <div className="w-9/10 grid grid-cols-9 gap4 mt-10">
          {tags}
      </div>
    </div>
     )
    }