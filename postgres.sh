docker run --rm -d \
    --name postgres-container \
    -e POSTGRES_USER=dummy \
    -e POSTGRES_PASSWORD=dummy \
    -e POSTGRES_DB=dummy \
    -v postgres:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres