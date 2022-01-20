# docker-samples

``$ docker build -t richarddaros1/nginx-com-vim:latest .``

``$ docker run -p 3003:80 -dit richarddaros1/nginx-com-vim``


# Creating and Runing the container in network

``$ docker network create --driver bridge network-ubuntu ``

``$ docker run -dit --name ubuntu4 --network network-ubuntu bash ``

``$ docker run -dit --name ubuntu4 --network network-ubuntu bash ``

``$ docker inspect ubuntu4 ``

``$ docker network inspect network-ubuntu``

# How to connect the container in the network

``$ docker network connect network-ubuntu ubuntu4 ``

