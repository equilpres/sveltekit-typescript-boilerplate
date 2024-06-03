FROM node:18.18-alpine AS deps
WORKDIR /app
RUN npm install --global pnpm@8.15.7
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:18.18-alpine AS builder
WORKDIR /app
RUN npm install --global pnpm@8.15.7
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN pnpm build

FROM node:18.18-alpine AS runner
WORKDIR /app
RUN npm install --global pnpm@8.15.7
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltejs
COPY --from=builder --chown=sveltejs:nodejs /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./
COPY --from=builder /app/.env.production ./
COPY --from=builder /app/package.json ./
USER sveltejs
CMD pnpm start
