import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Twine-tarinankerrontaohjelman oppaat</h1>

    <p>Twine on .</p>

	<hr />
    
	<p>
	Jos et ole koskaan käyttänyt Twine, tutustu <Link to="/tut0/">Twinen peruskäyttöön</Link>
	</p>
	
	<hr />
	
	<img src="/bass.png" />
	<img src="/static/bass.png" />
	
    <Link to="/build/twine.js">Twinen peruskäyttö</Link>
    <Link to="/tut2/">Twinen peruskäyttö</Link>
    <Link to="/tut3/">Twinen peruskäyttö</Link>
	
	
  </div>
)

export default IndexPage
