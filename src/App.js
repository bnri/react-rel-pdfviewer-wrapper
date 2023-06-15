import React from "react";
import './App.scss';
import PDFresultModal from './lib/PDFresultModal';
import data1 from './data/300.json';
// import * as pdftk from 'node-pdftk';
// npm uninstall node-pdftk path-browserify crypto
// import { decrypt } from "node-qpdf2";

// const options = {
//   input: "./54.pdf",
//   output: "./54d.pdf",
//   password: "YOUR_PASSWORD_TO_DECRYPT_PDF",
// }
// console.log("시작")
// decrypt(options).then(res=>{
//     console.log("res,res",res);
// }).catch(e=>{
//     console.log("e",e);
// });


function App() {
  // console.log("data1",data1);
  const [selPathway, set_selPathway] = React.useState(true);

  React.useEffect(()=>{

  },[])
  return (
    <div className="App">

      <button onClick={e => set_selPathway(true)}>열기</button>
      {selPathway &&
        <PDFresultModal
          WORKERSRC={process.env.REACT_APP_WORKERSRC || "http://localhost:3000"}
          PDFonloadCallback={(pages)=>{
            console.log("페이지수?",pages);
          }}
          printPDFData={{
            agencyName: '테스트학원이름',
            testeeClass: 'xx반',
            testeeName: '홍길동',
            testeeID: '가나다라마바사',
            testDate: '1999.04.19',
            pdfName: '테스트PDF',
          }}
          downloadFileName = "테스트파일이름"

          specialWidth={'1200px'}
          specialHeight={'800px'}

          data={{
            gazeData: data1,
            screenSize: {
              width: 1920,
              height: 1080
            },
            pdfSize: {
              width: 1728,
              height: 2443
            }
          }}
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/25.pdf"}
          // path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/54.pdf"}
          path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/18.pdf"}
          // path="/54-unlocked.pdf"
          viewpercent={100}
     
          showConfirmBtn={false}
          onConfirm={() => {
            set_selPathway(null);
          }}
          onClose={() => {
            set_selPathway(null);
          }}
        />

      }


    </div>
  );
}

export default App;
