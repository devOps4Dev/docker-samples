# Check network creation 

If you didn't create the network ``laravelnet`` execute the next command ``docker network create laravelnet`` 

## Sample - Build and Run

```
docker build -t richarddaros1/php-laravel:prod . -f Dockerfile.prod

docker run -d --network laravelnet --name php-laravel-prod richarddaros1/php-laravel:prod 
```

Run the docker in folder ``nginx-with-laravel``

