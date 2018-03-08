import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Elektroniika: Liikennevalot</h2>

	<img src="/img/liikennevalot_small.jpg" />
	
	<p>
	Liikennevalot toimivat tähän tapaan:<br />
	A) Vihreä valo: saa mennä<br />
	B) Keltainen valo: valo on muuttumassa punaiseksi, mutta vielä saa mennä<br />
	C) Punainen valo: ei saa mennä<br />
	D) Punainen ja keltainen valo: valo on muuttumassa vihreäksi, mutta vielä ei saa mennä<br />
	</p>
	
    <p>Valot toistavat tätä sarjaa. Twinellä tämä voidaan esittää</p>

	<img src="/img/e01_small.png" />
	
	<p>Laitetaan Twine ohjaamaan Arduinon ledejä. Tätä varten pitää asettaa päälle Arduino-storyformat, jotta saamme käyttöön Arduino-komennot. Nyt kappaleeseen A voidaan kirjoittaa</p>
	
		<pre>
{'{'}led_reset{'}'}<br />
{'{'}+led_green{'}'}<br />
[[{'{'}button1{'}'}->B]]
	</pre>

	<p>Aaltosulkeet Twinessä tarkoittavat Arduinon ohjausta. Aaltosulkeiden sisällä teksti "led_reset" sammuttaa kaikki ledit. Teksti "+led_green" sytyttää vihreän ledin. Punaisen ledin nimi on "led_red" ja keltaisen "led_yellow". Plusmerkki ledin nimessä tarkoittaa sytyttämistä, miinusmerkki sammuttamista. Nyt siis ensin sammutetaan kaikki ledit, minkä jälkeen vihreä ledi laitetaan päälle.</p>
	
	<p>Aiemmin kappaleessa oli linkki "[[B]]", jonka tekstiä painamalla käyttäjä pääsi seuraavaan kappaleeseen. Aaltosulkeissa oleva "button1" tarkoittaa napin numero 1 painamista. Twine voi käyttää kolmea painiketta, "button1", "button2" ja "button3", jotka voidaan liittää erilaisiin painikkeisiin. Tällä koodilla Twine odottaa käyttäjän painavan fyysistä painiketta numero 1 eikä klikkaavan tekstiä ruudulla.</p>

	<img src="/img/e02_small.png" />
	
	<hr />
	
	<Link to="/">Pääsivu</Link>
	
  </div>
)

export default IndexPage
