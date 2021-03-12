// import React from 'react';
import React from 'react';
import Grid from "@material-ui/core/Grid"
import SkillCard from "../components/SkillCard"

const SkillData=[
    {
    Title:"FrontEnd",
    Rader:{
            labels: ['JavaScript', 'Vue', 'HTML', 'CSS', 'React'],
            datasets: [
                        {
                        data: [4, 3, 3, 2, 2],
                        backgroundColor: 'rgba(221,29,27,0.3)',
                        borderColor: 'rgb(221,29,27)',
                        borderWidth: 1,
                        },
                    ],
    },
    Paragraph:"Webフロントエンドの中だと、JavaScriptが一番好きです。JSフレームワークは今までVue.jsを使っていましたが、最近React.jsに乗り換えました。HTML,CSSはあまり得意ではないので、BootStrapなどのCSSフレームワークをよく使います。"
    },
    {Title:"BackEnd",
    Rader:{
            labels: ['Python(Flask)', 'GAS', 'GO', 'Node.js', 'SQL'],
            datasets: [
                        {
                        data: [5, 2, 1,1, 4],
                        backgroundColor: 'rgba(3,174,213,0.3)',
                        borderColor: 'rgb(3,174,213)',
                        borderWidth: 1,
                        },
                    ],
    },
    Paragraph:"普段からPythonをよく使います。RestAPIが必要な時はFlask＋Herokuで作ることが多いです。サーバーサイドの技術にはあまり触れたことがないので、今後はLaravelPHPやNode.jsに触れてみたいと思います。SQLはSQLiteで触りました。また、GoogleAPIを触る際にGASを使いました。"
    },
    {Title:"Data Science/Machine Learning",
    Rader:{
            labels: ['Python(Pytorch)', 'Stats.', 'Algolythms', 'CV', 'NLP'],
            datasets: [
                        {
                        data: [4, 4, 4,2, 1],
                        backgroundColor: 'rgba(241,200,9,0.3)',
                        borderColor: 'rgb(241,200,9)',
                        borderWidth: 1,
                        },
                    ],
    },
    Paragraph:"機械学習フレームワークでは、Pytorchを使うことが多いですがタスクによって使い分けています。数学や統計の勉強が趣味なので、アルゴリズムや数理統計は得意分野です。一方、数値データを扱うことが多いので、画像処理や自然言語処理は勉強中です。"
    },
    {Title:"Others",
    Rader:{
            labels: ['Git/Github', 'Docker', 'Heroku', 'AWS', 'GCP'],
            datasets: [
                        {
                        data: [4, 3, 4,1, 3],
                        backgroundColor: 'rgba(221,29,27,0.3)',
                        borderColor: 'rgb(221,29,27)',
                        borderWidth: 1,
                        },
                    ],
    },
    Paragraph:"Git,Githubはよく使う。DockerはDockerComposeを一度書いたくらいです。ホスティングにはHeroku,FireHostingを使っています。GCPはAPIを使う時に使用しました。"
    }
]

const SkillPage = () =>{
    var ListColumn=[];
  for (var n in SkillData){
    ListColumn.push(<Grid item spacing={3} >{SkillCard(SkillData[n])}</Grid>)
  }
    return(
    <div id="skill-section">
        <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
          {ListColumn}
        </Grid> 
    </div> 
    )}
export default SkillPage;