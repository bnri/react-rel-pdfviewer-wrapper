import React from "react";
import './App.scss';
import PDFresultModal from './lib/PDFresultModal';
import data1 from './data/324.json';


function App() {
  // console.log("data1",data1);
  const [selPathway, set_selPathway] = React.useState(true);

  return (
    <div className="App">

      <button onClick={e => set_selPathway(true)}>열기</button>
      {selPathway &&
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
                 path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/20.pdf"} //302번 json
          viewpercent={100} //이건 측정할때의 값인데. 일단은 100 넣어버림.

          data={{
            gazeData: data1,
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
