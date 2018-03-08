import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Lihapullansyöntikilpailu</h2>

	<p>
	Tehdään peli, jossa tavoitteena on syödä 10 lihapullaa. Yksinkertaisimmin tämän voisi tehdä kirjoittamalla yhtä monta kappaletta kuin meillä on syötäviä lihapullia.
    </p>	
	
	<img src="/img/lihapulla0.png" />
	
	<p>Pitemmän päälle tämä on kuitenkin työlästä, jos vaikka haluaisimme tehdä 100 lihapullan syöntipelin.</p>
	
	<p>Kokeillaan tehdä tämä käyttäen muuttujia! Kirjoita Twineen seuraava kappale</p>

	<img src="/img/lihapulla1.png" />
	
	<p>Ensimmäisellä rivillä asetetaan muuttujalle $lihapulla arvo 10. Tätä ei näytetä pelaajalle. Toisella rivillä pelaajalle näytetään montako lihapullaa on jäljellä. Twine tunnistaa muuttujan $-merkistä ja korvaa sen muuttujan arvolla. Lopuksi pelaajalle annetaan mahdollisuus syödä lihapulla. Jos kokeilet peliä, se näyttää nyt tältä</p> 

	<img src="/img/lihapulla2.png" />
	
	<p>Kirjoita seuraavaksi Syö-kappaleeseen seuraava</p>
	
	<img src="/img/lihapulla3.png" />
	
	<p>$lihapulla-muuttujan arvosta vähennetään yksi, koska pelaaja söi yhden lihapullan. Tämä määrä näytetään pelaajalle. Jos kokeilet peliä ja syö lihapullan, peli sanoo</p>

	<img src="/img/lihapulla4.png" />

	<p>Koska teimme tämän kappaleen muuttajaa käyttäen, on seuraavan lihapullan syöminen helppoa. Voimme käyttää samaa syömiskappaletta uudelleen! Kirjoita Syö-kappaleeseen vielä syömislinkki</p>

	<img src="/img/lihapulla5.png" />

	<p>Tarinan rakenne näyttää nyt tältä</p>

	<img src="/img/lihapulla6.png" />

	<p>Kokeilen peliä! Peli toimii, mutta jos syöt liian monta lihapullaa, huomaat ongelman...</p>

	<img src="/img/lihapulla7.png" />
	
	<p>Peli ei huomaa jos lihapullat loppuvat vaan peli jatkuu negatiivisiin numeroihin, -1, -2, -3, jne.</p>
	
    <p>Tarvitsemme vielä ehtolauseen, joka tunnistaa jos kaikki lihapullat on syöty ja peli on voitettu. Muokataan Syö-kappale muotoon</p>	
	
	<img src="/img/lihapulla9.png" />
	
	<p>Koodissa sanotaan siis, että jos lihapullia on 0, onnitellaan voittajaa. Muussa tapauksessa pelaajalle näytetään syömislinkki. Nyt pelin pitäisi päättyä nollassa</p>
	
	<img src="/img/lihapulla8.png" />
	
	<p>Jos haluat, voit kokeilla samaa vielä sadalla lihapullalla!</p>
	
	<hr />
	
	<Link to="/">Pääsivu</Link>
	
  </div>
)

export default IndexPage
