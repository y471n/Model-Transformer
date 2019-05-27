FIRST_ARG=$1
SECOND_ARG=$2

runtest()
{
  cd packages/test
  npm test
}

install()
{
  cd packages/test && npm install
  cd .. && cd ..
  cd packages/model-transformer && npm install
}

publish(){
  echo "$1"
}

if [ $FIRST_ARG == "test" ]
then  
  runtest

elif [ $FIRST_ARG == "local" ] && [ $SECOND_ARG == "install" ]
then 
  install

elif [ $FIRST_ARG == "publish" ]
then 
  if [ $2 == "-p" ] && [ $3 == "password" ]
  then
    publish
  else
    echo "Please provide Password"
  fi
fi