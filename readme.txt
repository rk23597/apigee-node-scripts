Authentication type - 
1) mvn install -Ptest -Dusername=username -Dpassword=Password
2) mvn install -Ptest -Dusername=username -Dauthtype=oauth -Dbearer=token
  -- refresh token won't work - put access token 