import styles from './DataContainer.module.css';
import Container from '../UI/Container'

const testData = {
    id: 1,
    name: 'Alex Galvan',
    email: 'agalvan@testing.com',
    address: '203 Testing',
    city: 'Solana Beach',
    state: 'California',
    postalCode: '92109',
    linkedInUrl: 'https://linkedin.com/agalvan'
}
// @ts-ignore
const DataContainer = props => {
  let data = Object.entries(testData)
    // let data = props.children.data.entries()
    return (
      <Container icon='person' name='' navItems={null} backgroundColor='background-aqua-lt'>
               <ul>
                {data.map(data => {
                    return (
                        <p>{data[0]}: {data[1]}</p> 
                    )
                })}
            </ul>
        </Container>
    )
}

export default DataContainer;
