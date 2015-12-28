#where $1 is yearmonth e.g 201512 , 201601
mkdir -p ./raw/$1
wget -P ./raw/$1/ -i ./url_list_$1.txt -N

