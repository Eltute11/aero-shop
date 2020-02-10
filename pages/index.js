import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Link from 'next/link'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDIwZTc2YjhmYTY3NTAwNmQwMGU0NTAiLCJpYXQiOjE1NjI0Mzc0ODN9.oeeX9Vx0vrWNZK5knmWLjcMCvpNQQWlvvpcQAMxqqf8'

export default class extends React.Component { 
  static async getInitialProps(){
    const req = await fetch(`https://coding-challenge-api.aerolab.co/user/me`, {
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + token,
                        }
                      })
    const user = await req.json()
    return { user }
  }

  render() {
    return <Layout title="Mis datos">
      <h1>Mis datos</h1>
      
      {console.log(this.props.user)}
      <div>
        <h2>{this.props.user.name}</h2>
        <ul>
          <li>Id {this.props.user._id}</li>
          <li>My Points {this.props.user.points}</li>
          <li>Create Date {this.props.user.createDate}</li>
        </ul>
        <button onClick={updatePoints}>Incrementar puntos</button>
      </div>

  
      <style jsx>{`
        h1, h2 {
          font-family: system-ui;
          font-weight: 300;
          color: #333;
        }
      `}</style>
    </Layout>
  }
 }

 const updatePoints = () => {
   
   let requestObject = {
     amount: 1000
   }
   const req =  fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + token,
                        },
                        body: JSON.stringify(requestObject)
                      })
    const res =  req.json()

    console.log(res)
   }