# isSportGroundOpen
Find out the sport ground open status

# How to deploy?

1. run wgetAllRawPDF.sh . e.g `./wgetAllRawPDF.sh 201602` to download all pdf links in url_list_201602.txt to ./raw/201602
2. run pdfToTxtBatch.sh . e.g `./pdfToTxtBatch.sh 201602` to convert all pdf in  ./raw/201602 to ./txt/201602
   Note that you may need to pdftotext first. http://www.cyberciti.biz/faq/converter-pdf-files-to-text-format-command/
3. cd to app and do `npm isntall`
4. run the program by `DEBUG=app:* npm start`

# Demo
http://anydrink.space:3000/

# extract status:

1. solvable
2. solvable but need minor tweaks
3. need another approach...
4. N/A

# how to extract by 1?

command to extract the pdf:

pdftotext -layout THE_ABOVE.pdf output.txt

regex to find date with bookings in output.txt:

^[\s]{0,}[\d]{1,2}[\s]{1,}.*$

# by extracting the below pdf
小西灣運動場,2
22° 16' 3.0",114° 14' 56.0"
http://www.lcsd.gov.hk/lsb/jogging/488_201512.pdf

長洲運動場,4
no info

九龍仔運動場,2
22° 19' 50.0",114° 11' 3.0"
http://www.lcsd.gov.hk/lsb/jogging/48_201512.pdf

巴富街運動場,3
22° 19' 14.0",114° 10' 52.0"
http://www.lcsd.gov.hk/lsb/jogging/63_201512.pdf

葵涌運動場,2
22° 21' 30.0",114° 7' 31.0"
http://www.lcsd.gov.hk/lsb/jogging/790_201512.pdf

青衣運動場,2
22° 21' 22.0",114° 6' 29.0"
http://www.lcsd.gov.hk/lsb/jogging/845_201512.pdf

和宜合道運動場,2
22° 22' 27.0",114° 8' 13.0"
http://www.lcsd.gov.hk/lsb/jogging/851_201512.pdf

九龍灣運動場,2
22° 19' 37.0",114° 12' 35.0"
http://www.lcsd.gov.hk/lsb/jogging/962_201512.pdf

粉嶺遊樂場,3
22° 29' 37.0",114° 8' 15.0"
http://www.lcsd.gov.hk/lsb/jogging/282_201512.pdf

北區運動場,2
22° 30' 23.0",114° 7' 50.0"
http://www.lcsd.gov.hk/lsb/jogging/309_201512.pdf

西貢鄧肇堅運動場,2
22° 23' 1.0",114° 16' 24.0"
http://www.lcsd.gov.hk/lsb/jogging/375_201512.pdf

將軍澳運動場,3
22° 18' 44.0",114° 15' 49.0"
http://www.lcsd.gov.hk/lsb/jogging/1060_201512.pdf

深水埗運動場,1
22° 20' 14.0",114° 9' 9.0"
http://www.lcsd.gov.hk/lsb/jogging/683_201512.pdf

馬鞍山運動場,2
22° 25' 15.0",114° 13' 42.0"
http://www.lcsd.gov.hk/lsb/jogging/413_201512.pdf

沙田運動場,2
22° 23' 15.0",114° 11' 51.0"
http://www.lcsd.gov.hk/lsb/jogging/428_201512.pdf

香港仔運動場,2
22° 14' 58.0",114° 10' 18.0"
http://www.lcsd.gov.hk/lsb/jogging/547_201512.pdf

大埔運動場,2
22° 27' 19.0",114° 9' 45.0"
http://www.lcsd.gov.hk/lsb/jogging/97_201512.pdf

城門谷運動場,1
22° 22' 37.0",114° 7' 41.0"
http://www.lcsd.gov.hk/lsb/jogging/618_201512.pdf

兆麟運動場,2
22° 23' 6.0",113° 58' 41.0"
http://www.lcsd.gov.hk/lsb/jogging/238_201512.pdf

屯門鄧肇堅運動場,2
22° 24' 14.0",113° 58' 27.0"
http://www.lcsd.gov.hk/lsb/jogging/263_201512.pdf

銅鑼灣運動場,3
22° 16' 50.0",114° 11' 26.0"
http://www.lcsd.gov.hk/lsb/jogging/907_201512.pdf

灣仔運動場,4
22° 16' 53.0",114° 10' 40.0"
no info

斧山道運動場,1
22° 20' 18.0",114° 12' 26.0"
http://www.lcsd.gov.hk/lsb/jogging/723_201512.pdf

天水圍運動場,2
22° 27' 17.0",114° 0' 18.0"
http://www.lcsd.gov.hk/lsb/jogging/197_201512.pdf

元朗大球場,2
22° 26' 33.0",114° 1' 17.0"
http://www.lcsd.gov.hk/lsb/jogging/214_201512.pdf

