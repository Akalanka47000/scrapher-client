# IMPORTANT NOTE: Usually we won't need to run the client as a container because it has no server-side code
# and can be run directly in the browser but for ease of setup during testing we're writing this dockerfile and
# will be pushing it to a remote registry

FROM oven/bun:1.2.11-alpine

ARG VITE_API_BASE_URL

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

WORKDIR /app

COPY . .

RUN bun install --production --ignore-scripts

RUN bun run build

EXPOSE 5173

CMD ["sh", "-c",  "bun start"]