import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Twinen peruskäyttö, osa 1/2</h2>

	<p>Twine-ohjelman kotisivu on <a href="http://twinery.org/" target="_blank">twinery.org</a>. Alla on kuva tästä sivusta. Twinen voi ladata omalle tietokoneelle. 
	Se toimii Windows-, Linux- sekä MacOS-käyttöjärjestelmissä. Helpointa sitä on kuitenkin käyttää suoraan selaimesta. Selainkäyttö onnistuu "Use it online" -linkistä 
	oikeasta laidasta (punainen nuoli).</p>
	
    <img src="/img/00b.png" />

	<p>"Use it online" -painikkeesta avautuu alla oleva näkymä. Voit lukea englanninkielisen ohjelman esittelyn klikkaamalla "Tell me more" ja kelaamalla 
	sivua alaspäin tai ohittaa ohjeet painamalla "Skip"-linkkiä.</p>
	
    <img src="/img/01.png" />

	<p>Avautuva ohjelman päänäkymä on alla. Vaihdetaan aluksi ohjelman kieleksi suomi. Klikkaa oikean laidan valikosta Language (punainen nuoli).</p>
	
    <img src="/img/02b.png" />

	<p>Esiin tulee ohjelman kielivaihtoehdot. Klikkaa Suomen lippua.</p>
	
    <img src="/img/02c.png" />
	
	<p>Nyt esiin tulee ohjelman pääsivu suomeksi. Jos Twineä ei ole aiemmin käytetty tällä selaimella, vasemmassa laidassa lukee "0 tarinaa" eli tarinoita ei vielä ole. 
	Kun luot tarinoita, tässä näytössä näkyy tarinakirjasto.</p>

	<p>Oikeassa laidassa on valikko. Ylimpänä valikosa on vihreä "+Tarina"-painike. Luo uusi tarina painamalla tätä painiketta.</p>
	
    <img src="/img/03.png" />
	
    <p>Ohjelma kysyy nimeä tarinalle. Kirjoita nimeksi esimerkiksi "Harjoitus1" tai muu haluamasi nimi ja paina "+Lisää"-painiketta.</p>

    <img src="/img/04.png" />

	<p>Ruutuun avautuu näkymä, josta voit muokata luotua tarinaa. Ruudun alalaidassa on valikko, 
	josta meidän ei tarvitse vielä välittää. Varsinainen näyttö on suuri ruutupaperi, johon voi kiinnittää muistilappuja. Kuhunkin lappuun voi kirjoittaa kappaleen 
	tarinasta. Tarina koostuu lappuihin kirjoitetuista kappaleista.</p>
	
    <img src="/img/05.png" />

	<p>Aluksi tarinassa on yksi lappu eli tekstikappale, jonka nimi on "Nimetön kappale". Pyöreä vihreä rakettimerkki merkitsee, että tarina alkaa tästä lapusta. Jos viet hiiren lapun päälle, lapun alle aukeaa valikko. Valikosta voi (vasemmalta oikealle) poistaa lapun, muokata kappaletta, testata kappaletta ja määrätä kappaleen tarinan aloitukseksi sekä säätää lapun kokoa. Valitse muokkaus (kynän kuva) tai kaksoisnapsauta lappua.</p>

    <img src="/img/06.png" />

	<p>Kukin lappu sisältää kolme tekstikenttää: otsikko, tunnisteet sekä kappaleen teksti. Tarinan lukijalle näkyy vain kappaleen teksti. Sekä otsikko että tunnisteet ovat kirjoittajan merkintöjä.</p>

    <img src="/img/07.png" />

	<p>Kirjoita tämän kappaleen otsikoksi "Alku" ja tekstiksi alla näkyvä vitsin alku. Ensimmäinen repliikki on kirjoitettu sellaisenaan, vastaus kaksoishakasulkeisiin.</p>
	
	<img src="/img/08.png" />

	<p>Kappaleen voi sulkea esc-näppäimellä tai oikean yläkulman X-painikkeella. Teksti tallentuu automaattisesti, sitä ei tarvitse erikseen tallentaa. Tarinaan on nyt automaattisesti tullut toinen kappale sekä nuoli kappaleiden välille. Kokeile tarinaa alavalikon oikeasta reunasta löytyvällä Testaa-painikkeella.</p>

	<img src="/img/09.png" />

	<p>Tarinan ensimmäinen kappale avautuu uuteen välilehteen. Kaksoishakasulkuihin kirjoitettu toinen repliikki on sinisellä tekstillä merkitty klikattava linkki. Klikkaa linkkiä.</p>
	
	<img src="/img/10b.png" />

	<p>Emme ole luoneet sisältöä kuin yhteen kappaleeseen. Tässä toisessa kappaleessa on oletusteksti "Double-click this passage to edit it" eli "Muokkaa kappaletta kaksoisklikkaamalla". Sulje selaimen aktiivinen välilehti, jotta pääset takaisin tarinan muokkaukseen.</p>

	<img src="/img/11.png" />
	
	<p>Kaksoisklikkaa uutta kappaletta, johon johtaa nuoli ensimmäisestä kappaleesta. Lisää kappaleeseen alla oleva teksti. Sulje taas kappale ja testaa tarinaa uudelleen alavalikon Testaa-painikkeella.</p>

	<img src="/img/12.png" />
	
	<p>Tehdään vielä yksi asia ennen kuin ensimmäinen harjoitus on valmis. Avaa toinen kappale uudelleen muokattavaksi ja lisää siihen alla oleva teksti.</p>
	
	<img src="/img/13.png" />
	
	<p>Kun kappaleen muokkauksesta poistutaan esc-painikkeella tai ylänurkan X-painikkeella, tarina näyttää nyt tältä:</p>
	
	<img src="/img/14.png" />
	
	<p>Kaksoishakasuluissa oleva teksti "No kerro!" johtaa kappaleeseen, jonka otsikko on "No kerro!". Oikeasti haluaisimme uuden kappaleen, johon voisimme kirjoittaa toisen kysymyksen vastauksen, mutta nyt linkki johtaa takaisin itseensä (Kokeile tarinaa nyt Testaa-toiminnolla!).</p>
	
	<p>Usein meille kelpaa, että kun kirjoitamme kaksoishakasulkeisiin linkkitekstin, niin Twine luo meille automaattisesti uuden kappaleen tällä nimellä. Jos tämän niminen kappale kuitenkin on jo olemassa, meidän täytyy kirjoittaa linkki eri tavalla. Muokkaa vielä kappale muotoon:</p>
	
	<img src="/img/15.png" />
	
	<p>Nuolimerkintä tarkoittaa, että lukijalle näytetään nuolen vasemmalla puolella oleva teksti. Kun tätä tekstiä klikataan, tarina siirtyy kappaleeseen jonka nimi on nuolen oikealla puolella. Jos poistut kappaleen muokkauksesta, huomaat että Twine on luonut meille uuden kappaleen otsikolla "Vastaus2".</p>
	
	<img src="/img/16.png" />

    <p>Muokkaa vielä Vastaus2-kappaleeseen seuraava teksti ja testaa tarinaa.</p>
	
	<img src="/img/17.png" />

	<p>Jos poistut tarinan muokkauksesta vasemman alakulman mökki-painikkeella, pääset takaisin päävalikkoon. Nyt tarinakirjasto ei ole enää tyhjä vaan meillä on yksi tarina, jonka juuri teimme. Kolme limittäistä palloa kertoo, että tarinamme koostuu kolmesta kappaleesta.</p>
	
	<img src="/img/18.png" />
	
	<p>Tarinat tallennetaan selaimen muistiin, niin että voit sammuttaa selaimen ja kun käynnistät Twinen uudelleen samalla selaimella, kirjoittamasi tarinat ovat tallesssa.</p>

	<p>Lue seuraavaksi <Link to="/tut1/">Twinen peruskäyttö, osa 2</Link>, jossa kerrotaan tarinoiden varmuuskopioinnista ja käydään läpi Twinen muita toimintoja.</p>
	
	<hr />
	
	<Link to="/">Pääsivu</Link>
	
  </div>
)

export default IndexPage
