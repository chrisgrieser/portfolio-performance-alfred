// teststring
// var input = "<name>Apple</name> <currencyCode>EUR</currencyCode> <note>Portfolio-Report liefert die falsche Aktie...</note> <isin>US0378331005</isin> <tickerSymbol>AAPL</tickerSymbol> <wkn>865985</wkn> <feed>YAHOO</feed> <prices> <name>Netflix</name> <currencyCode>EUR</currencyCode> <isin>US64110L1061</isin> <tickerSymbol>NFLX</tickerSymbol> <wkn>552484</wkn> <feed>PORTFOLIO-REPORT</feed> <prices> <name>VanEck Vectors Video Gaming &amp; eSports UCITS ETF</name> <currencyCode>EUR</currencyCode> <note>https://www.vaneck.com/de/en/espo/index/</note> <isin>IE00BYWQWR46</isin> <tickerSymbol>ESP0</tickerSymbol> <wkn>A2PLDF</wkn> <feed>PORTFOLIO-REPORT</feed> <prices> <name>Ökoworld Klima C</name> <currencyCode>EUR</currencyCode> <isin>LU0301152442</isin> <tickerSymbol>WXO3.BE</tickerSymbol> <wkn>A0MX8G</wkn> <feed>GENERIC_HTML_TABLE</feed> <feedURL>https://www.ariva.de/%C3%B6koworld_klima-fonds/historische_kurse?boerse_id=8&amp;month=&amp;currency=EUR&amp;clean_split=1&amp;clean_payout=1&amp;clean_bezug=1</feedURL> <prices> <name>Flossbach v. Storch - Multiple Opportunities R</name> <currencyCode>EUR</currencyCode> <isin>LU0323578657</isin> <tickerSymbol>S6TB.BE</tickerSymbol> <wkn>A0M430</wkn> <feed>GENERIC_HTML_TABLE</feed> <feedURL>https://www.ariva.de/flossbach_von_storch_sicav_-_multiple_opportunities_r-fonds/historische_kurse?boerse_id=8&amp;month=&amp;currency=EUR&amp;clean_split=1&amp;clean_payout=1&amp;clean_bezug=1</feedURL> <prices>"
input = "{query}";

input = input.replaceAll ("&amp;","&"); //URL Decode
var asset = input.split("<prices>");
let asset_array = [];

asset.forEach(element => {
  temp = element.replace (/<(\w+)>(.*?)<\/\w+> /g,"$1,$2;");
  
  property = temp.split (";");
  let asset_name = property[0].replace (/ ?name,/,"");
  let asset_currency = "";
  let asset_isin = "";
  let asset_symbol = "";
  let asset_wkn = "";
  property.forEach(prop => {
  	if (prop.includes ("isin")){
  		asset_isin = prop.replace (/isin,/,"");
  	};
  	if (prop.includes ("tickerSymbol")){
  		asset_symbol = prop.replace (/tickerSymbol,([^\.]*)\.?.*/,"$1");
  	};
  	if (prop.includes ("wkn")){
  		asset_wkn = prop.replace (/wkn,/,"");
  	};
  	if (prop.includes ("currencyCode")){
  		asset_currency = prop.replace (/currencyCode,/,"");
  	};
  });

  asset_array.push ({ // Add to empty array
    'title': asset_name + " - " + asset_symbol,
    'subtitle': "ISIN: " + asset_isin + ", WKN: " + asset_wkn,
    'arg': asset_isin + "," + asset_symbol + "," + asset_wkn + "," + asset_name,
  })
});

JSON.stringify({ 'items': asset_array }) // Transform it into JSON Alfred understands
