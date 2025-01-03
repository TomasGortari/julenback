# Utiliser une image Node.js officielle comme base
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer uniquement les dépendances nécessaires
RUN npm install --production

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Copier le fichier .env dans le conteneur
COPY .env .env

# Exposer le port 8055 (port par défaut de Directus)
EXPOSE 8055

# Démarrer l'application Directus
CMD ["npx", "directus", "start"]
