import React, {useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import UsersComponent from './components/UsersComponent';
import * as actionCreators from "./state/actionCreators";
import { connect } from 'react-redux';
import styled from "styled-components";


const AppStyle = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  div{
    width: 100%;
  }
`

export function App({renderContent, users}) {

  useEffect(()=> {
    renderContent()
  }, [renderContent])

  if(!users) return <h3>Loading...</h3>

  return (
    <AppStyle className="App">
      <Navigation />
      <h1>My GitHub Usercard</h1>
      
      <UsersComponent users={users} />
    </AppStyle>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(
  mapStateToProps,
  actionCreators,
)(App);
