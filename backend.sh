systemctl start docker
sudo docker compose up dev-db -d
npx prisma migrate reset
npx prisma studio