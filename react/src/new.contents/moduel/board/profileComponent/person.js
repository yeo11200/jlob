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
            </div>
        )
    }
}

export default person;