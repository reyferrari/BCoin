{\rtf1\ansi\deff3\adeflang1025
{\fonttbl{\f0\froman\fprq2\fcharset0 Times New Roman;}{\f1\froman\fprq2\fcharset2 Symbol;}{\f2\fswiss\fprq2\fcharset0 Arial;}{\f3\froman\fprq2\fcharset0 Liberation Serif{\*\falt Times New Roman};}{\f4\fswiss\fprq2\fcharset0 Liberation Sans{\*\falt Arial};}{\f5\fnil\fprq2\fcharset0 Microsoft YaHei;}{\f6\fnil\fprq2\fcharset0 Lucida Sans;}{\f7\fswiss\fprq0\fcharset128 Lucida Sans;}}
{\colortbl;\red0\green0\blue0;\red0\green0\blue255;\red0\green255\blue255;\red0\green255\blue0;\red255\green0\blue255;\red255\green0\blue0;\red255\green255\blue0;\red255\green255\blue255;\red0\green0\blue128;\red0\green128\blue128;\red0\green128\blue0;\red128\green0\blue128;\red128\green0\blue0;\red128\green128\blue0;\red128\green128\blue128;\red192\green192\blue192;}
{\stylesheet{\s0\snext0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052 Normal;}
{\s15\sbasedon0\snext16\rtlch\af6\afs28 \ltrch\hich\af4\loch\sb240\sa120\keepn\f4\fs28\dbch\af5 Heading;}
{\s16\sbasedon0\snext16\loch\sl276\slmult1\sb0\sa140 Text Body;}
{\s17\sbasedon16\snext17\rtlch\af7 \ltrch\loch\sl276\slmult1\sb0\sa140 List;}
{\s18\sbasedon0\snext18\rtlch\af7\afs24\ai \ltrch\loch\sb120\sa120\noline\fs24\i Caption;}
{\s19\sbasedon0\snext19\rtlch\af7 \ltrch\loch\noline Index;}
}{\*\generator LibreOffice/7.5.2.2$Windows_X86_64 LibreOffice_project/53bb9681a964705cf672590721dbc85eb4d0c3a2}{\info{\creatim\yr0\mo0\dy0\hr0\min0}{\revtim\yr2024\mo3\dy7\hr1\min30}{\printim\yr0\mo0\dy0\hr0\min0}}{\*\userprops}\deftab709
\hyphauto1\viewscale100
{\*\pgdsctbl
{\pgdsc0\pgdscuse451\pgwsxn12240\pghsxn15840\marglsxn1134\margrsxn1134\margtsxn1134\margbsxn1134\pgdscnxt0 Default Page Style;}}
\formshade\paperh15840\paperw12240\margl1134\margr1134\margt1134\margb1134\sectd\sbknone\pgndec\sftnnar\saftnnrlc\sectunlocked1\pgwsxn12240\pghsxn15840\marglsxn1134\margrsxn1134\margtsxn1134\margbsxn1134\ftnbj\ftnstart1\ftnrstcont\ftnnar\aenddoc\aftnrstcont\aftnstart1\aftnnrlc
{\*\ftnsep\chftnsep}\pgndec\pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{\loch
document.addEventListener('DOMContentLoaded', function () \{}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
    }{\loch
fetchBitcoinPrice();}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
    }{\loch
// Fetch the Bitcoin price every 5 minutes}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
    }{\loch
setInterval(fetchBitcoinPrice, 300000);}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{\loch
\});}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar\loch

\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{\loch
function fetchBitcoinPrice() \{}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
    }{\loch
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
        }{\loch
.then(response => response.json())}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
        }{\loch
.then(data => \{}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
            }{\loch
const priceElement = document.getElementById('price');}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
            }{\loch
const price = data.bitcoin.usd;}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
            }{\loch
priceElement.textContent = `Current Price: $$\{price\}`;}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
        }{\loch
\})}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
        }{\loch
.catch(error => \{}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
            }{\loch
console.error('Error fetching Bitcoin price:', error);}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{
        }{\loch
\});}
\par \pard\plain \s0\rtlch\af6\afs24\alang1081 \ltrch\lang1033\langfe2052\hich\af3\loch\nowidctlpar\hyphpar0\ltrpar\cf0\f3\fs24\lang1033\kerning1\dbch\af8\langfe2052\ql\ltrpar{\loch
\}}
\par }