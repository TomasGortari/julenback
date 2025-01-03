# Utiliser l'image officielle de Directus
FROM directus/directus:latest

# Installer libvips et libheif
RUN apt-get update && apt-get install -y \
    libvips libvips-dev \
    libheif1 libheif-dev \
    && apt-get clean

# Démarrer Directus
CMD ["directus", "start"]
