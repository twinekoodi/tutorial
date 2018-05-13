import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Twine-tarinankerrontaohjelman oppaat</h2>

    <p>Twine on epälineaaristen vuorovaikutteisten tarinoiden kirjoittamiseen tarkoitettu työkalu.</p>
	
//	<p>Miksi tarinoita? Mitä on tarinankerronta? Lue <a href="/johdanto/">johdanto tarinankerrontaan</a></p>
	
	<p>Jos et ole koskaan käyttänyt Twineä, lue ensimmäisenä 
	<ul>
	<li><Link to="/tut0/">Twinen peruskäyttö, osa 1</Link></li>
	<li>Twinen peruskäyttö, osa 2 (tulossa)</li>
	</ul>
	</p>

	<hr />
	
	<h3>Perusjuttuja ilman ohjelmointia</h3>
	<p>
	<ul>
	<li>Kysely (tulossa)</li>
	<li>Tekstiseikkailu (tulossa)</li>
	<li>Vuorovaikutteinen runo (tulossa)</li>	
	</ul>
	</p>

	<hr />
	
	<h3>Muuttujien käyttöä</h3>
	<p>
	<ul>
	<li>Kysely pistelaskulla (tulossa)</li>
	<li>Monimutkaisempi tekstiseikkailu (tulossa)</li>
	<li><Link to="/tutm2/">Lihapullansyöntikilpailu</Link></li>	
	</ul>
	</p>

	<hr />
	
	<img src="/img/ele_small.jpg" />
	
	<h3>Elektroniikkaa</h3>
	
	<p>
	Twinellä laadituilla tarinoilla voi ohjata Arduino-elektroniikkaa. Tämä ominaisuus on vasta kehitteillä. Yllä on kuva Arduino Uno -kortista, joka ohjaa LCD-näyttöä (alhaalla vasemmalla) ja kolme lediä (alhaalla oikella vihreä, keltainen ja punainen ledi). Käyttäjä voi ohjata elektroniikkaa kolmella painikkeella (keskellä punainen, valkoinen ja sininen painike).
	</p>
	
	<p>
	<ul>
	<li>Portti salasanalla (tulossa)</li>
	<li><Link to="/tute1/">Liikennevalot</Link></li>
	<li>Neuvontarobotti (tulossa)</li>	
	</ul>
	</p>
	
	<hr />
	
  </div>
)

export default IndexPage
