import * as React from "react"
import Grid from "@material-ui/core/Grid"
import VerticalLinearStepper from "../components/Stepper.js"
import Papers from "../components/Paper"

const steps=[
    {"title":"東北大学入学","date":"2018-4","description":"工学部の化学専攻に入学しました。"},
    {"title":"AIスタートアップ","date":"2020-6","description":"プランナーのインターンをさせていただきました。"},
    {"title":"投票アプリ作成","date":"2020-8","description":"受託で投票アプリを開発しました。"},
    {"title":"化学系AIベンチャー","date":"2020-1","description":"データサイエンティスト,エンジニアのインターンをさせていただいております。"}
]

const CarrerPage = () =>{
    return(
    <div>
        {Papers(<Grid container justify="center" >
          {VerticalLinearStepper(steps)}
        </Grid>
        )}
    </div>
    )}
export default CarrerPage;