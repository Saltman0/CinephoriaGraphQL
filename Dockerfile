# 1) Use official Deno image
FROM denoland/deno:alpine-2.3.5

# 2) Set working directory inside the container
WORKDIR /app

# 3) Copy over only the files you need (e.g., code, deps, config)
COPY . .

# 4) Cache dependencies
RUN deno cache src/index.ts

# 5) Expose the port (adjust if different in your app)
EXPOSE 4000

# 6) Define the runtime command
CMD ["run", "--allow-net", "--allow-read", "--allow-env", "src/index.ts"]