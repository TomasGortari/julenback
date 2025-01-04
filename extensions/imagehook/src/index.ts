import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }) => {
	// Validation des fichiers au moment de l'upload
	action('files.upload', async ({payload}: any) => {
		try {
			console.log('payload', payload)
			// Autoriser uniquement les formats acceptés (par exemple, PNG et JPEG)
			const allowedTypes = ['image/png', 'image/jpeg'];

			if (!allowedTypes.includes(payload.type)) {
				console.error(`Type de fichier non supporté : ${payload.type}`);
				throw new Error('Seuls les fichiers PNG et JPEG sont autorisés.');
			}

			// Vérifier la taille maximale autorisée (exemple : 5 MB)
			const maxSize = 5 * 1024 * 1024; // 5 Mo
			if (payload.filesize > maxSize) {
				console.error(`Fichier trop volumineux : ${payload.filesize} octets`);
				throw new Error('La taille maximale des fichiers est de 5 Mo.');
			}

			// Retourner le fichier tel quel pour continuer le traitement
			console.log(`Fichier uploadé : ${payload.filename_download}`);
			return payload;
		} catch (error: any) {
			console.error('Erreur lors de la validation du fichier :', error.message);
			throw new Error(error.message || 'Erreur lors de l’upload du fichier.');
		}
	});

	// Log après l'upload
	
});
