
import Offer from "./offer";
import Nav from "./nav";
import ContentBox from "./containtbox";
import chat from './assets/chat.png'


function App() {
  return (
    <>
    <div className="w-full">
   <Offer/>
   <Nav/>
   <ContentBox/>
   <div className="static"><img className="flex fixed bottom-0 right-0 h-10 w-10 m-3  md:h-[4vw] md:w-[4vw] md:m-5" src={chat} /></div>
   </div>
    </>
  );
}

export default App;
