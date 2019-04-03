# Project 2 @cmda-minor-web · 2018-2019

_Voor het tweede project van de minor Web Development gaan we het bedrijf [ValTech](https://www.valtech.com) een handje helpen. Zij beheren namelijk de website van [Volkswagen](www.volkswagen.com), die ze jaren geleden hebben gemaakt. In de tussentijd is er niks tot weinig veranderd aan de website. Aan ons de taak om de volkswagen website te onderzoeken, op zoek naar verbeteringen in de performance en accessability._

## Table of Content
1. Opdracht
2. Onderzoek
    - 2.1 Performance
    - 2.2 Accessability
    - 2.3 Best Practices
    - 2.4 SEO
3. Top 5 oplossingen (+ POC)
    - 3.1 Server-Side rendering
    - 3.2 Afbeeldingen Compression
    - 3.3 Kleurencontrast
    - 3.4 Caching
    - 3.5 (service worker?)
4. Conclusie

## Hoofdstuk 1 |  Opdracht
De opdracht is individueel en duurt een werkweek. Aan het eind van de week (vrijdag) presenteren we ons eindverslag. Hierin moet een 'top 5 oplossingen' staan met daarbij een POC (Prove Of Concept). Hierin laten we zien wat de daadwerkelijke impact van de oplossingen is, en waarom deze van belang is.

## Hoofdstuk 2 | Onderzoek
De eerste stap in het zoeken naar improvements van performance en accessability op de [Volkswagen](www.volkswagen.com) site is een onderzoek. Hoe ziet de website er momenteel uit? Wat zijn punten van verbetering?

Om dit te testen heb ik de gebruik gemaakt van de Chrome Dev tools (`Audits` tab). Dit heb ik gedaan in incognitomodus voor de meest accurate testresultaten, omdat er in incocnitomodus geen extensies gebruikt worden. De testresultaten hiervan zijn hieronder te zien...

<img src="https://i.ibb.co/9GWkZL7/image.png">

**2.1 Performance: 61%**

<img src="https://i.ibb.co/y5zWmkq/image.png">

Op performance scoort de website `61/100`. Dit komt grotendeels omdat de website veel gebruik maakt van afbeeldingen. Afbeeldingen kosten veel meer tijd om te laden dan text, en het is daarom belangrijk dat afbeeldingen op de goede manier ingeladen worden. 

Een oplossing voor het probleem van lange laadtijd voor afbeeldingen is het gebruik van next-gen image formats, zoals 'WebP' of 'JPEG 2000'. Deze afbeeldingen maken gebruik van veel betere compressie, waardoor de filesize daalt en, je deze sneller kan downloaden en minder datagebruik hebt. Mogelijke winst:

<img src="https://i.ibb.co/bX8rFPW/image.png">

Naast afbeeldingen zijn er nog meer punten van verbetering, zoals het inladen van een standaard font voor het laden van de webfont. Dit zorgt ervoor dat text wel zichtbaar is tijdens het laden van de custom font.

Tot slot wordt er op de site geen gebruik gemaakt van caching. Caching zorgt ervoor dat veel bestanden geen tweede keer geladen hoeven worden, omdat ze op het systeem opgeslagen worden. Hiermee kan een hele hoop tijd gewonnen worden.

**2.2 Accessibility: 81%**

Naast performance is het belangrijk dat de website accessible is. Dit betekend dat de webstie voor zo veel mogelijk mensen te gebruiken is. Denk hierbij aan gebruikers met blind-/slechtziendheid of mensen met kleurenblindheid. Op accessibility scoort de website op dit moment `81/100`.

Kleurencontrast - Volgens de Google Audits tab is het kleurencontrast nog niet perfect. Denk hierbij aan 'lichtblauw op wit' of 'witte text op lichte afbeeldingen'. Zie voorbeelden daarvan hieronder:

<img src="https://i.ibb.co/wyNQBZ6/image.png" width="300">
<img src="https://i.ibb.co/QrjLS5V/image.png" width="300">

_Verdere onderzoeksresultaten op het gebied van Accessability komen later_

**2.3 Best Practices: 57%**

Op het gebied van Best Practices zijn er meerdere verbeterpunten, de site scoort daarom ook maar `57/100`:

<img src="https://i.ibb.co/ryJb978/image.png">

HTTP - Voor een groot deel van de website wordt op dit moment gebruik gemaakt van het HTTP/1 protocol. Een nieuwere versie van dit protocol is HTTP/2. HTTP/2 biedt vele voordelen ten opzichte van HTTP/1. 

document.write() - Op dit moment wordt er gebruik gemaakt van de document.write functie in javascript. Voor gebruikers met een langzame computer/verbinding kan dit ervoor zorgen dat het laden van de pagina veel langer duurt. Een oplossing voor dit probleem kan server side rendering zijn. Hierbij wordt de pagiana vanaf de server geredendered, in plaats van vanaf de client. Dit heeft naast snelle laadtijd nog meer voordelen.

**2.4 SEO: 100%**

SEO checkt of de website hoog in de Search Engine Rankings staat. Dit is belangrijk voor een website als die van volkswagen, omdat hun product(en) zo veel mogelijk bekeken moet worden. Dit is alleen niet relevant voor de performance en accessability.

## Hoofdstuk 3 | Top 5 oplossingen (+ POC)

In dit hoofdstuk ga ik de volgende oplossingen bespreken:
- 3.1 Server-Side Rendering
- 3.2 Afbeeldingen Compression
- 3.3 Kleurencontrast
- 3.4 Caching
- 3.5 

**3.1 Server-Side Rendering**
Momenteel wordt bij de site veel javascript ingeladen om onder andere afbeeldingen te compressen. Dit zorgt er onder andere voor dat de website geen afbeeldingen weergeeft als je Javascript uit hebt staan. Ook kost het downloaden van alle Javascript extreem veel tijd. Tot slot kost het ook nog veel tijd om de javascript uit te voeren. Om dit te voorkomen kan je ervoor kiezen de website Server-Side te renderen. Dit zorgt ervoor dat alle compressie en rendering wordt gedaan vanaf de server en dan naar de client wordt gestuurd. Dit scheelt veel tijd en maakt het mogelijk de website te runnen zonder Javascript.