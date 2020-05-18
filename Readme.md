Metadata extractor API written with typescript and Nestjs.

In order to start the app, run
- docker-compose up -d --build

Make sure to download Gutenberg project
https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.zip

Extract it and place in /files directory to the format of
files/1/pg1.rdf
files/2/pg2.rdf
.
.
.

- Go to RabbitMQ under localhost/15672, credentials `user` `user`
- Create a virtual host called vhost
- Lastly, restart publisher service `docker-compose restart publisher`


API documentation can be found at `localhost:3000/swagger`.
