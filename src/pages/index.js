import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Twine-tarinankerrontaohjelman oppaat</h1>

    <p>Twine on epälineaaristen interaktiivisten tarinoiden kirjoittamiseen tarkoitettu työkalu. Sitä voi käyttää suoraan nettiselaimella osoitteessa</p>

	<p><a href = "http://twinery.org/2">Twinery.org/2</a></p>
	
	<p>tai tällä sivulla ohjelman kehitysversiota</p>

	<p><a href = "/twine/index.html">twinekoodi.fi/twine</a></p>

	<hr />
    
	<p>
	Jos et ole koskaan käyttänyt Twine, tutustu <Link to="/tut0/">Twinen peruskäyttöön</Link>
	</p>
	
	<hr />	
	
  </div>
)

export default IndexPage
