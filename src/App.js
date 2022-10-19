import React from "react";
import './App.scss';
import PDFresultModal from './lib/PDFresultModal';
import data1 from './data/1.json';


function App() {
  // console.log("data1",data1);
  const [selPathway,set_selPathway] = React.useState(true);
  return (
    <div className="App">
        
        <button onClick={e=>set_selPathway(true)}>열기</button>
        {selPathway&&
               <PDFresultModal
     
            
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
               path={"https://readerseye-pathway.s3.ap-northeast-2.amazonaws.com/1.pdf"}
               viewpercent={100}
               
               showConfirmBtn={true}
               onConfirm={()=>{
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
