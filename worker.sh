FIRST_ARG=$1
SECOND_ARG=$2

runtest()
{
  cd packages/test
  npm install
  npm run test
}

install()
{
  cd packages/test && npm install
  cd .. && cd ..
  cd packages/model-transformer && npm install
}

publish(){

  # Update the package.json
  response=$(node helper.js)
  if [ $response == "SUCCESS" ]
  then
    cd packages/model-transformer
    npm publish
  else
    echo "Cannot Publish Right Now because : $response"
  fi
  
}


# --------  MAIN BLOCK ------------
if [ $FIRST_ARG == "test" ]
then  
  runtest

elif [ $FIRST_ARG == "local" ] && [ $SECOND_ARG == "install" ]
then 
  install

elif [ $FIRST_ARG == "publish" ]
then 
  publish

fi