/**
 * Domínio: Blog
 * Responsabilidade: Geração e validação de IDs para posts
 *
 * Formato: {slug}-{hash}
 * - slug: título do post formatado (via slugify)
 * - hash: nanoid(6) - 6 caracteres aleatórios
 *
 * Este utilitário garante:
 * - ID imutável após criado
 * - Compatibilidade com Giscus (data-mapping="specific")
 * - Prevenção básica de colisões
 */

import { nanoid } from 'nanoid';
import { slugify } from '../../utils';

/**
 * Comprimento do hash nanoid
 * Documentação especifica exatamente 6 caracteres
 */
const HASH_LENGTH = 6 as const;

/**
 * Pattern regex para validar formato slug-hash
 * Formato: {slug}-{hash}
 * - slug: caracteres alfanuméricos e hifens (pode ter múltiplos hífens)
 * - hash: exatamente 6 caracteres alfanuméricos
 * Exemplo: welcome-to-my-blog-a3f91c
 */
export const POST_ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*-[a-z0-9]{6}$/;

/**
 * Schema Zod para validação de ID de post
 * Usado no content.config.ts para validação em tempo de build
 */
export const postIdSchema = z
	.string()
	.describe('Discussion ID from GitHub Discussions (required for Giscus comments)')
	.refine((id) => POST_ID_PATTERN.test(id), {
		message: 'ID must be in format: {slug}-{hash} (e.g., welcome-to-my-blog-a3f91c)',
	});

/**
 * Gera um ID no formato slug-hash para um novo post
 *
 * @param title - Título do post (usado para gerar o slug)
 * @returns ID no formato {slug}-{hash}
 *
 * @example
 * generatePostId('Welcome to My Blog')
 * // Returns: 'welcome-to-my-blog-a3f91c'
 */
export function generatePostId(title: string): string {
	const slug = slugify(title);
	const hash = nanoid(HASH_LENGTH);
	return `${slug}-${hash}`;
}

/**
 * Gera um ID com verificação de colisão
 * Tenta gerar um novo hash se o ID já existir
 *
 * @param title - Título do post
 * @param existingIds - Array de IDs existentes para verificar colisão
 * @param maxAttempts - Número máximo de tentativas (padrão: 5)
 * @returns ID único no formato {slug}-{hash}
 */
export function generateUniquePostId(
	title: string,
	existingIds: string[],
	maxAttempts: number = 5
): string {
	const slug = slugify(title);
	const existingSlugIds = existingIds.filter((id) => id.startsWith(`${slug}-`));

	for (let attempt = 1; attempt <= maxAttempts; attempt++) {
		const hash = nanoid(HASH_LENGTH);
		const candidateId = `${slug}-${hash}`;

		if (!existingSlugIds.includes(candidateId)) {
			return candidateId;
		}
	}

	// Se todas as tentativas falharem, usa timestamp como último recurso
	const fallbackHash = nanoid(HASH_LENGTH);
	return `${slug}-${fallbackHash}`;
}

/**
 * Parses um ID de post em suas partes componentes
 *
 * @param id - ID no formato {slug}-{hash}
 * @returns Objeto com slug e hash, ou null se formato inválido
 *
 * @example
 * parsePostId('welcome-to-my-blog-a3f91c')
 * // Returns: { slug: 'welcome-to-my-blog', hash: 'a3f91c' }
 */
export function parsePostId(id: string): { slug: string; hash: string } | null {
	if (!POST_ID_PATTERN.test(id)) {
		return null;
	}

	const lastHyphenIndex = id.lastIndexOf('-');
	if (lastHyphenIndex === -1 || lastHyphenIndex === 0) {
		return null;
	}

	const slug = id.slice(0, lastHyphenIndex);
	const hash = id.slice(lastHyphenIndex + 1);

	return { slug, hash };
}

/**
 * Valida se uma string é um ID de post válido
 *
 * @param id - String a validar
 * @returns true se o formato for válido
 */
export function isValidPostId(id: unknown): id is string {
	return typeof id === 'string' && POST_ID_PATTERN.test(id);
}

import { z } from 'astro:content';
