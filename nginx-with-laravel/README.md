# Check network creation 

If you didn't create the network ``laravelnet`` execute the next command ``docker network create laravelnet`` 

# Commands

```

docker build -t richarddaros1/nginx-laravel:prod . -f Dockerfile.prod

docker run -d --network laravelnet --name nginx-with-laravel -p 8080:80 richarddaros1/nginx-laravel:prod

docker logs nginx-with-laravel

```

