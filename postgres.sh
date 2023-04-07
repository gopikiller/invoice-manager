docker run --rm -d \
    --name postgres-container \
    -e POSTGRES_USER=gopi \
    -e POSTGRES_PASSWORD=secret \
    -e POSTGRES_DB=node-express \
    -v postgres:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres