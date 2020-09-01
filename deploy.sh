git branch gh-pages
git merge master
npm run build
mv public/* public/.* .
rm -r public
rm -r src
git add . 
git commit -m "Publish"
git push origin --force
git checkout master
git branch -d gh-pages
