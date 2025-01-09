import React, { useEffect, useState } from "react";
import './App.scss';
import PDFresultModal from './lib/PDFresultModal';
// import data1 from './data/324.json';
import pako from "pako";



// 압축된 데이터를 해제하는 함수 (프런트엔드)
export function decompressData(base64CompressedData) {
  // Base64 디코딩
  const compressedData = Uint8Array.from(atob(base64CompressedData), c => c.charCodeAt(0));


  // pako를 사용하여 압축 해제
  try {
    const decompressedData = pako.inflate(compressedData, { to: "string" });
    // JSON 문자열을 객체로 변환
    return JSON.parse(decompressedData);
  }
  catch (err) {
    console.error(err);
    return null;
  }
  // console.log("압축됬니?",decompressedData)

}



function App() {
  // console.log("data1",data1);
  const [selPathway, set_selPathway] = React.useState(true);
  const [data,setData] = useState(null);

  useEffect(()=>{
    fetch('./704.txt')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.arrayBuffer(); // 바이너리 데이터로 읽기
    })
    .then((buffer) => {
      const base64Data = btoa(
        new Uint8Array(buffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      console.log("Base64 Data:", base64Data);
      const temps3 = decompressData(base64Data);
      const news3=[];
      const {gazeProperty,ArrArr}=temps3;
      for(let i = 0 ; i <ArrArr.length; i++){
        const oneGaze={};
        const arrarrOneGaze= ArrArr[i];            
        for(let j = 0 ; j <gazeProperty.length; j++){
          const key=gazeProperty[j];
          oneGaze[key]=arrarrOneGaze[j];
        }
        news3.push(oneGaze);
      }
      setData(news3);
      // console.log("dd",dd)
    })
    .catch((error) => console.error("Error reading file:", error));
  },[])
  return (
    <div className="App">

      <button onClick={e => set_selPathway(true)}>열기</button>
      {selPathway &&data&&
        <PDFresultModal
          onClose={() => {
            set_selPathway(null);
          }} //X 눌렀을시
          showConfirmBtn={false}
          onConfirm={() => {
            set_selPathway(null);
          }} //완료 버튼 눌렀을시
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/25.pdf"} //1번 json
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/18.pdf"} //300번 json
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/95.pdf"} //301번 json
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/4.pdf"} //302번 json
                 path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/1.pdf"} //302번 json
          viewpercent={100} //이건 측정할때의 값인데. 일단은 100 넣어버림.

          data={{
            gazeData: data,
            screenSize: {   //측정할때 스크린사이즈
              width: 1920,
              height: 1080
            },
            pdfSize: { //측정할때의 pdf 사이즈
              width: 1728,
              height: 2443
            }
          }}
          //모달사이즈를 변경가능
          specialWidth={'100%'}
          specialHeight={'100%'}
          agencyName={'테스트학원이름'}
          printPDFData={{
            testeeClass: 'xx반',
            testeeName: '홍길동',
            testeeID: '가나다라마바사',
            testDate: '1999.04.19',
            pdfName: '테스트PDF',
          }}
          downloadFileName="테스트파일이름"

          PDFonloadCallback={(pages) => {
            // console.log("페이지수?",pages);
          }}


          pencolor={"#0000FF"} //반드시 HEX PDF인쇄시 HEX필요
          penweight={5}
          penpermit={1}
          hideRemocon={false}
          // agencyLogoArrayBuffer={}
          isPathwayPlus={true}
        />

      }


    </div>
  );
}

export default App;
