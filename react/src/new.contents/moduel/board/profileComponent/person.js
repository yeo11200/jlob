import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';


class person extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                 {/* 개인 정보를 적는 컴포넌트 */}
                 <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="50"
                        width="100"
                        image="/react/public/LOGO.png"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            신진섭
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <div>
                        <span>Blog : </span><a href="https://blog.naver.com/sksksms2">https://blog.naver.com/sksksms2</a>
                    </div>
                    <div>
                        <span>GitHub : </span><a href="https://github.com/yeo11200">https://github.com/yeo11200</a>
                    </div>
                    <div>
                        <span>Contact : </span><a href="mailto:yeo11200@hanmail.net">yeo11200@hanmail.net</a>
                    </div>
            </div>
        )
    }
}

export default person;