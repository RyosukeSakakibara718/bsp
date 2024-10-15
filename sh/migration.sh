
SERVICE_NAME="apache"

(docker compose up > /dev/null 2>&1 &)

CONTAINER_NAME=""
while [ -z "$CONTAINER_NAME" ]; do
  echo "Waiting for container to be created..."
  CONTAINER_NAME=$(docker compose ps -q "$SERVICE_NAME")
  sleep 2
done

echo "Container created with ID: $CONTAINER_NAME"
CONTAINER_LIST=$(docker compose ps)
echo "$CONTAINER_LIST"
# Docker Compose 起動が完了するまでコンテナの状態を監視
echo "Waiting for the container ($CONTAINER_NAME) to be in 'running' state..."
while [ "$(docker inspect -f '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null)" != "running" ]; do
  sleep 2
done

echo "Container is running, connecting... $$CONTAINER_NAME"
# docker exec -it "$CONTAINER_NAME"
docker exec -it "$SERVICE_NAME" bash -c "php artisan migrate:fresh" && \
docker exec -it "$SERVICE_NAME" bash -c "php artisan migrate --seed" || {
  echo "Failed to run migrations or seed"; exit 1;
}

echo "All migrations executed successfully!"