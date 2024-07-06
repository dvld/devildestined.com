ng build -c production
cd docs
mv -v ./browser/* .
rm -d ./browser
cp index.html 404.html
echo 'devildestined.com' >CNAME