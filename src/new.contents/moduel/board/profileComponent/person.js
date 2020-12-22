import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { logo } from '../../../../logo.svg';

class person extends React.Component{

    constructor(props){
        super(props);

        console.log(window.location.origin );
    }

    render(){

        const style = {
            media : {
                width: 'auto',
                height: 'auto',
                maxWidth: '100px',
                maxHeight: '100px',
                border: 'none', margin: '0', padding: '0', display: 'inline',
                borderRadius: '10px'
            }
        }
        return(
            <div>
                 {/* 개인 정보를 적는 컴포넌트 */}
                 <Card>
                    <CardActionArea>
                        
                        {/** require('./LOGO.png') image를 추가할 경우는 require를 이용해서 사용한다. */}
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="100px"
                        width="100px"
                        image={require('./LOGO.png')}
                        title="Contemplative Reptile"

                        style={style.media}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            신진섭
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            프론트개발자를 지향하지만, 풀스택 개발을 원한다.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className="sssss">
                    <dl>
                        <dt className="blog">Blog : </dt>
                        <dd><a href="https://blog.naver.com/sksksms2" target="_blank">https://blog.naver.com/sksksms2</a></dd>
                        <dt className="github">Git : </dt>
                        <dd><a href="https://github.com/yeo11200"  target="_blank">https://github.com/yeo11200</a></dd>
                        <dt className="email">Email : </dt>
                        <dd><a href="mailto:yeo11200@hanmail.net">yeo11200@hanmail.net</a></dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default person;