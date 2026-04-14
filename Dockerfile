# =========================
# Base
# =========================
FROM public.ecr.aws/docker/library/node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app


# =========================
# Dependencies (all deps for build)
# =========================
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci


# =========================
# Build
# =========================
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# =========================
# Runtime (production)
# =========================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy only runtime assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev \
 && npm cache clean --force

# Ensure correct ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# Run Next.js directly (not via npm)
CMD ["node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
