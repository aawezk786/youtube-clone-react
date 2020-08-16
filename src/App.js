import React from 'react';
import Grid from '@material-ui/core/Grid';
import youtube from './api/youtube';
import  {Searchbar ,Videodetail, Videolist} from './components';
class App extends React.Component {
    state ={
        videos: [],
        selectedVideos : null,
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideos : video})
    }
    handleSubmit= async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part : 'snippet',
                maxResults: 5,
                key : 'AIzaSyDYk3juV2SS9EvemcEfVZ4c1Uga6MZdiL0',
                q : searchTerm,
        
            }
        });
        // console.log(response.data.items);   
        this.setState({
            videos : response.data.items,
            selectedVideos : response.data.items[0]
        });
    }
    render() {
        const {selectedVideos , videos} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Searchbar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Videodetail video={selectedVideos}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default App;