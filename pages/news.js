import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Link from 'next/link'

export default class extends React.Component { 
  static async getInitialProps(){
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const story = await req.json()
    return { story }
  }

  render() {
    return <Layout title="Latest News">
      <h1>Latest New</h1>
      {console.log(this.props.story)}
      { this.props.story.map((story) => (
        <div>
          <h2><a href={ story.url }> {story.title} </a></h2>
          <p>
            <Link prefetch href={ `/story?id=${story.id} `}>
              <a onClick={pizzaClick}>{ story.comments_count } comments</a>
            </Link>
          </p>
        </div>

      ))}
  
      <style jsx>{`
        h1 {
          font-family: system-ui;
          font-weight: 300;
          color: #333;
        }
      `}</style>
    </Layout>
  }
 }

 const pizzaClick = () => console.log('Free pizza!')