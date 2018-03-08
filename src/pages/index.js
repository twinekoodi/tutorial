import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Twine-tarinankerrontaohjelman oppaat</h2>

    <p>Twine on epälineaaristen vuorovaikutteisten tarinoiden kirjoittamiseen tarkoitettu työkalu.</p>
	
	<p>Jos et ole koskaan käyttänyt Twineä, lue ensimmäisenä 
	<ul>
	<li><Link to="/tut0/">Twinen peruskäyttö, osa 1</Link></li>
	<li><Link to="/tut1/">Twinen peruskäyttö, osa 2</Link></li>
	</ul>
	</p>

	<hr />
	
	<h3>Perusjuttuja ilman ohjelmointia</h3>
	<p>
	<ul>
	<li><Link to="/">Kysely</Link> (tulossa)</li>
	<li><Link to="/">Tekstiseikkailu</Link> (tulossa)</li>
	<li><Link to="/">Vuorovaikutteinen runo</Link> (tulossa)</li>	
	</ul>
	</p>

	<hr />
	
	<h3>Muuttujien käyttöä</h3>
	<p>
	<ul>
	<li><Link to="/tut0/">Kysely pistelaskulla</Link> (tulossa)</li>
	<li><Link to="/tut0/">Monimutkaisempi tekstiseikkailu</Link> (tulossa)</li>
	<li><Link to="/tut1/">Kolme varista -laulu</Link> (sata varista!) (tulossa)</li>	
	</ul>
	</p>

	<hr />
	
	<img src="/img/ele_small.jpg" />
	
	<h3>Elektroniikkaa</h3>
	
	<p>
	Twinellä laaditut tarinat voivat ohjata Arduino-elektroniikkaa. Tämä ominaisuus on vasta kehitteillä. Yllä on kuva Arduino Uno -kortista, joka ohjaa LCD-näyttöä (alhaalla vasemmalla) ja kolme lediä (alhalla oikella vihreä, keltainen ja punainen ledi). Käyttäjä voi ohjata elektroniikkaa kolmella painikkeella (alhaalla keskellä punainen, valkoinen ja sininen painike).
	</p>
	
	<p>
	<ul>
	<li><Link to="/">Portti salasanalla</Link> (tulossa)</li>
	<li><Link to="/tute1/">Liikennevalot</Link></li>
	<li><Link to="/">Neuvontarobotti</Link> (tulossa)</li>	
	</ul>
	</p>
	
	<hr />
	
  </div>
)

export default IndexPage
