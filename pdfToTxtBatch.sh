#where $1 e.g 201512
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
