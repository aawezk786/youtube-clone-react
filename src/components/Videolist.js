import React from 'react';

import {Grid} from '@material-ui/core';

import Videoitem from './Videoitem';

const Videolist = ({videos ,onVideoSelect}) => {
    const listofVideos = videos.map((video, id) => <Videoitem onVideoSelect={onVideoSelect} key={id} video={video}/> )
    return (
        <Grid container spacing={10}>
            {listofVideos}
        </Grid>
    )
}

export default Videolist;