import * as React from "react"
import Grid from "@material-ui/core/Grid"
import icon from "../images/iorin.png"
import Typography from '@material-ui/core/Typography';

const FeatherPage = () => {
  return (
     <div id="feather-section">
             <Grid container justify="space-around" spacing={1}>
            <Grid item>
            <img src={icon} alt="img" width="200" ></img>
          </Grid>
          <Grid item sm={6}>
            <Typography paragraph>こんにちは。21才,大学4年生のいおりんです。専攻は化学ですが、エンジニアとしてインターンをさせてもらっています。<br/>プログラミングはもちろんですが、機械学習や数理統計などのデータサイエンスやプロダクト・UIデザイン,アーキテクチャ,プランニングやビジネスも勉強しています。また、化学とデータサイエンスの融合の研究をしています。<br/>将来的には、フルスタックエンジニア兼データサイエンティストになりたいです。よろしくお願いします！！</Typography>
          </Grid>
        </Grid>
    </div>
  )
}
export default FeatherPage;