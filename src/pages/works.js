import React from 'react';
import Grid from "@material-ui/core/Grid"
import CardUI from "../components/CardUI"

/*この辺の代わりうるデータをデータベースにぶち込みたい。いずれ。 */
var WorkData=[
  {title:"研修先投票アプリ",date:"2020-9-20",img:"/static/images/cards/20210104202742.jpg",tools:"Javascript,Python,Vue.js,Flask",href:"https://voting-283308.web.app",paragraphs:["受託で作りました。UIデザインにはBootStrap-Vueデータベースや認証にはFirebaseを使いました。"],key:0},
  // {title:"Recipicks",date:"2021-3-20",img:"/static/images/cards/noimage.jpg",tools:"Javascript,React,Node.js,Firebase",href:"http://localhost:8080/",paragraphs:["これから頑張る","めっちゃ頑張る","うおおおおお"],key:1},
  {title:"このポートフォリオ",date:"2021-2-27",img:"/static/images/cards/portfolio.png",tools:"Javascript,React,Gatsby",href:"https://iorinportfolio.gtsb.io/",paragraphs:["React.js練習用として作りました。UIデザインはMaterial-UIプラグインを使い、カードが映えるデザインにしました。"],key:2},
  {title:"電子書籍検索LineBot",date:"2021-3-10",img:"/static/images/cards/libot.png",tools:"GAS,Python,Beautifulsoup",href:"/",paragraphs:["学術機関認証で読むことができる電子書籍を検索できるLINEBotです。","BeautifulSoupでスクレイピングしたデータをSpreadsheetに格納し,ユーザーのメッセージを受け付けて検索結果を返します。"],key:1}

]


//カラムの横幅に合わせて横列を作る
function ListLow(data){
  var ListLow=[];
  for (var n in data){
    ListLow.push(<Grid item spacing={1} key={data[n].key}>{CardUI(data[n])}</Grid>)}
  return ListLow;
}



const WorksPage = () =>{
  var Direction="column"
  // var Width = typeof window !== `undefined` ? require(window).innerWidth : null
   if (typeof window !== 'undefined') {
  var Width=window.innerWidth
}
  // var Width=window.innerWidth
  console.log(Width)
  switch(true){
    case Width<600:
      Direction="column"
      break
    case 600<=Width&&Width<900:
      Direction="row"
      break
    case 900<=Width:
      Direction="row"
      break
    default:
      Direction="row"
  }
    return(
    <div id="work-section">
        <Grid container  direction={Direction} justify="center" alignItems="center" spacing={1}>
          {ListLow(WorkData)}
        </Grid>
    </div>
    )}
export default WorksPage;