import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Tutoriaaleja Twinen käyttöön</h1>
    <p>Welcome to your new Gatsby site.</p>
    
	<p>
	Jos et ole koskaan käyttänyt Twine, kokeile
    <Link to="/tut0/">Twinen peruskäyttö</Link>
	</p>
	
	<hr />
	
    <Link to="/tut1/">Twinen peruskäyttö</Link>
    <Link to="/tut2/">Twinen peruskäyttö</Link>
    <Link to="/tut3/">Twinen peruskäyttö</Link>
  </div>
)

export default IndexPage
