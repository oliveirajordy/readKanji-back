# readKanji-back

LerKanji é um conversor de kanji (em romaji, katakana e hiragana) visando a conversão de grandes e pequenos textos, formatando-os para uma leitura mais limpa.

__Biliotecas para conversão usadas no backend__
 * Kuromoji
 * Kuroshiro
 * kuroshiro-analyzer-kuromoji

 > __API__ 
 > > __URL/converter__
 > ```javascript
 >   //Recebe:
 >   {
 >      text: String,
 >      settings: {
 >          to: string, 
 >          mode: string
 >      }
 >   }
 >   //text -> texto a ser convertido (em texto com marcações html serão tiradas todas as marcaçõe exceto a <br>)
 >   //to -> para qual alfabeto(romaji, katakana, hiragana) default: hiragana 
 >   //mode -> modo de converção(normal, furigana, spaced, okurigana) default: furigana
 >
 >  //Retorna
 >  {
 >    data: string  
 >  }
 > ```