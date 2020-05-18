export const bookFixture: string = `
<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF xml:base="http://www.gutenberg.org/"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:cc="http://web.resource.org/cc/"
  xmlns:dcam="http://purl.org/dc/dcam/"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:pgterms="http://www.gutenberg.org/2009/pgterms/"
>
  <pgterms:ebook rdf:about="ebooks/1">
    <dcterms:subject>
      <rdf:Description rdf:nodeID="N12dde79f877248aaab4b7f4f4972905d">
        <rdf:value>United States. Declaration of Independence</rdf:value>
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/LCSH"/>
      </rdf:Description>
    </dcterms:subject>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.txt.utf-8">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">120944</dcterms:extent>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:04.018342</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N0ad7a69dbbde44a997ddf912323e8d68">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">text/plain</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">1971-12-01</dcterms:issued>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.epub.images">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1043871</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nef883eda29ec42c8a6a748ce5553fe11">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/epub+zip</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:05.751328</dcterms:modified>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:description>This is the original PG edition.&#13;
See also our revised edition: #16780&#13;
See also #300</dcterms:description>
    <dcterms:subject>
      <rdf:Description rdf:nodeID="N42bdbe849d334e73b393dc49713798f2">
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/LCSH"/>
        <rdf:value>United States -- History -- Revolution, 1775-1783 -- Sources</rdf:value>
      </rdf:Description>
    </dcterms:subject>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/files/1/1-h/1-h.htm">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">131866</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-08-11T14:05:44</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nba8d91510af645ea9cba40ab80f3a073">
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">text/html</rdf:value>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:creator>
      <pgterms:agent rdf:about="2009/agents/1638">
        <pgterms:webpage rdf:resource="http://en.wikipedia.org/wiki/Thomas_Jefferson"/>
        <pgterms:deathdate rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1826</pgterms:deathdate>
        <pgterms:name>Jefferson, Thomas</pgterms:name>
        <pgterms:birthdate rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1743</pgterms:birthdate>
        <pgterms:alias>United States President (1801-1809)</pgterms:alias>
      </pgterms:agent>
    </dcterms:creator>
    <dcterms:language>
      <rdf:Description rdf:nodeID="Nb0c58cb56c8243349a1308a423c8adbd">
        <rdf:value rdf:datatype="http://purl.org/dc/terms/RFC4646">en</rdf:value>
      </rdf:Description>
    </dcterms:language>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/files/1/1-0.zip">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">45685</dcterms:extent>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nac74613fc9a24e7a9d0f6d5405d68239">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">text/plain; charset=us-ascii</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-08-11T14:06:48</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nddbb71dad1564ddbbac3926b7ada6a12">
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/zip</rdf:value>
          </rdf:Description>
        </dcterms:format>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.kindle.noimages">
        <dcterms:format>
          <rdf:Description rdf:nodeID="N1308bc6e5a234178a30a67e4365a0f7e">
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/x-mobipocket-ebook</rdf:value>
          </rdf:Description>
        </dcterms:format>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:07.296294</dcterms:modified>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">309052</dcterms:extent>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.rdf">
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-07T05:00:04.971076</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N3e14bab42aa04570b663ceaa0604cc05">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/rdf+xml</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">14203</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
      </pgterms:file>
    </dcterms:hasFormat>
    <pgterms:bookshelf>
      <rdf:Description rdf:nodeID="Nd51be1bc5f4e4a29a5db5eaafbcecdfa">
        <dcam:memberOf rdf:resource="2009/pgterms/Bookshelf"/>
        <rdf:value>American Revolutionary War</rdf:value>
      </rdf:Description>
    </pgterms:bookshelf>
    <pgterms:downloads rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">418</pgterms:downloads>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.epub.noimages">
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">74756</dcterms:extent>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N6fd7ab58831143e083babe6b5b9ea584">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/epub+zip</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:05.949320</dcterms:modified>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:title>The Declaration of Independence of the United States of America</dcterms:title>
    <dcterms:publisher>Project Gutenberg</dcterms:publisher>
    <dcterms:subject>
      <rdf:Description rdf:nodeID="Nf447071ea929451abda36125b832df2d">
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/LCC"/>
        <rdf:value>E201</rdf:value>
      </rdf:Description>
    </dcterms:subject>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/cache/epub/1/pg1.cover.small.jpg">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">4618</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:07.326303</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nc565cce3822446ef95ced673ba320ef6">
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">image/jpeg</rdf:value>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
    </dcterms:hasFormat>
    <pgterms:bookshelf>
      <rdf:Description rdf:nodeID="Nc1c1122236ae4e56a3f92fd165806398">
        <dcam:memberOf rdf:resource="2009/pgterms/Bookshelf"/>
        <rdf:value>United States Law</rdf:value>
      </rdf:Description>
    </pgterms:bookshelf>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/files/1/1-0.txt">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">120941</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-08-11T13:55:58</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N02c552dede1042d0b54226ae63e488da">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">text/plain; charset=us-ascii</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:subject>
      <rdf:Description rdf:nodeID="N9cb41ce27fc64807b58e4adea82caa0e">
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/LCC"/>
        <rdf:value>JK</rdf:value>
      </rdf:Description>
    </dcterms:subject>
    <dcterms:rights>Public domain in the USA.</dcterms:rights>
    <pgterms:bookshelf>
      <rdf:Description rdf:nodeID="N33c0d8f0c7a64758830ff94059a42926">
        <rdf:value>Politics</rdf:value>
        <dcam:memberOf rdf:resource="2009/pgterms/Bookshelf"/>
      </rdf:Description>
    </pgterms:bookshelf>
    <dcterms:type>
      <rdf:Description rdf:nodeID="Nf8f64cc2fcd047daa9e2ded0f24b30d6">
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/DCMIType"/>
        <rdf:value>Text</rdf:value>
      </rdf:Description>
    </dcterms:type>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/cache/epub/1/pg1.cover.medium.jpg">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">23768</dcterms:extent>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:07.354304</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N5b269884624c46fbadcde761c7e5b3c4">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">image/jpeg</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/files/1/1-h.zip">
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">2189095</dcterms:extent>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nedf3de171da5463c907cb5fd65b10983">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/zip</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Na4d85adce347406baae9e676360bb881">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">text/html</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2018-08-11T14:06:48</dcterms:modified>
      </pgterms:file>
    </dcterms:hasFormat>
    <dcterms:license rdf:resource="license"/>
    <dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/1.kindle.images">
        <dcterms:isFormatOf rdf:resource="ebooks/1"/>
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">2242791</dcterms:extent>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-05-01T03:30:06.912309</dcterms:modified>
        <dcterms:format>
          <rdf:Description rdf:nodeID="Nc85374b6964c48aaa5627502ceb3d22e">
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/x-mobipocket-ebook</rdf:value>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
    </dcterms:hasFormat>
  </pgterms:ebook>
  <cc:Work rdf:about="">
    <rdfs:comment>Archives containing the RDF files for *all* our books can be downloaded at
            http://www.gutenberg.org/wiki/Gutenberg:Feeds#The_Complete_Project_Gutenberg_Catalog</rdfs:comment>
    <cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/"/>
  </cc:Work>
  <rdf:Description rdf:about="http://en.wikipedia.org/wiki/Thomas_Jefferson">
    <dcterms:description>Wikipedia</dcterms:description>
  </rdf:Description>
</rdf:RDF>
`;
