import React, {useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Playlists from './components/Playlists';
import * as actionCreators from "./state/actionCreators";
import { connect } from 'react-redux';

export function App({renderContent, playlist}) {

  useEffect(()=> {
    renderContent()
  }, [renderContent])
  if(!playlist) return <h3>Loading...</h3>
  return (
    <div className="App">
      <Navigation />
      <h1>Adrien Joly's Playlist</h1>
      <p><strong>Hi!</strong> My name is Adrien Joly and I'm so excited to share with you my music playlist. I'have been adding to the playlist for some months now and Finally I get to share it with you. Links to each track is added and I do hope you enjoy every one. Don't forget to give each track a thumbs up if you love it. Alright then, get to it <span role='img' aria-label='increase-volume'>🔊🔊</span></p>

      <Playlists playlists={playlist} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  }
}
export default connect(
  mapStateToProps,
  actionCreators,
)(App);
