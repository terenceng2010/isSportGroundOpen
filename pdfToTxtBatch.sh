#where $1 is yearmonth e.g 201512 or 201601
for file in ./raw/$1/*
do
   #echo $file
   #echo ${file##*/}
   destName=$(basename $file ".pdf")
   destName+=".txt"
   #echo $destName
   mkdir -p ./txt/$1
   pdftotext -layout $file ./txt/$1/$destName
done
