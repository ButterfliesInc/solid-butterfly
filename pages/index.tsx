import styles from '../styles/Home.module.css'
import Contacts from '../src/components/Contacts'
import DataContainer from '../src/components/DataContainer'
import ContactsForm from '../src/components/ContactsForm'
import Backdrop from '@/src/components/UI/Backdrop'

export default function Home() {
  return (
    <main className={styles.main} >
      
      <div>
      <h2>Settings</h2>
      <p>Link Account to Slack</p>
      <p>Link Account to LinkedIn</p>
      <p>Link Account to Facebook </p>

      <h2>Social Management</h2>
      <p>Perhaps create a Slack Workspace and channels</p>
      <p>Create a simple post - be able to attach an image or file of some sort, click on send to Slack or whatever..</p>
      <p>Assign people to them</p>
      <p> Be able to send and receive messages - notifications...</p>

      <h2>Contact Management</h2>
      <p>Import Contacts from .... List of places you can import them from</p>
      <p> Once you import have a cleanup function... Show you the contacts that look like duplicates and suggest...</p>
      <p> If duplicate allow you to merge information</p>
        <Contacts />
        <ContactsForm />
      </div>
    </main>
  )
}

//  <DataContainer />