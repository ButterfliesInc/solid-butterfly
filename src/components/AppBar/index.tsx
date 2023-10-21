import React from 'react';
import styles from './AppBar.module.css';
import {useSession} from "../../hooks/useSession";
import Container from '../UI/Container'
import Card from '../UI/Card'

const apps = [
  {
      id: 1,
      name: 'App1',
  },
  {
      id: 2,
      name: 'App2',
  },
  {
      id: 3,
      name: 'App3',
  },
  {
      id: 4,
      name: '+Add More'
  }];

const AppBar = () => {
    const { session } = useSession();
    console.log(session)
    return (
      <Container icon='' name='apps' navItems={null} backgroundColor='background-aqua-lt'>
          <ul>
              {apps.map(app => {
                  return (
                      <Card key={app.id}>
                          {app.name}
                      </Card>
                  )
              })}
          </ul>
      </Container>)
}

export default AppBar;
