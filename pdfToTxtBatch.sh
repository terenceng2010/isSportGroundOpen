for file in ./raw/201512/*
do
   #echo $file
   #echo ${file##*/}
   destName=$(basename $file ".pdf")
   destName+=".txt"
   #echo $destName
   pdftotext -layout $file ./txt/201512/$destName
done
