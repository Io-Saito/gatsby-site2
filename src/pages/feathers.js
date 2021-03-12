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
            <Typography paragraph>通称 : いおりん<br/>年齢 : 21才<br/>学年 : 大学4年生<br/>学部・専攻 : 工学部化学バイオ工学科化学工学専攻 <br/> 好きなこと : ものを作ること(プログラミング・手芸・料理・ジェネラティブアート),学ぶこと(プロダクト/UIデザイン,機械学習や数理統計などのデータサイエンス,システムアーキテクチャ,事業計画,経済学,社会学,哲学,心理学,数学)<br/>研究 : 化学とデータサイエンスの融合,マテリアルインフォマティクス<br/>なりたいもの : フルスタックエンジニア兼データサイエンティスト,起業家 </Typography>
          </Grid>
        </Grid>
    </div>
  )
}
export default FeatherPage;