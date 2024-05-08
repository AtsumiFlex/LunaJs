import type { DiscordHeadersInfer } from "@aurajs/core";
import { ApiVersions, BASE_URL, CDN_URL } from "@aurajs/core";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestMakeRequestOptions<T> = Pick<Dispatcher.DispatchOptions, "method" | "query"> & {
	body?: any;
	headers?: DiscordHeadersInfer;
	type?: T;
	url: string;
};

export class Rest {
	public token: string | null = null;

	public version = ApiVersions.V10;

	public api = BASE_URL;

	public cdn = CDN_URL;

	public constructor(token: string) {
		this.token = token;
	}

	public get headers(): Pick<DiscordHeadersInfer, "Authorization" | "Content-Type" | "User-Agent"> {
		return {
			Authorization: `Bot ${this.token}`,
			"User-Agent": `AuraJs (${this.api}, ${this.version})`,
			"Content-Type": "application/json",
		};
	}

	public async makeRequest<T>(options: RestMakeRequestOptions<T>): Promise<T> {
		if (!this.token) {
			throw new Error("No token provided");
		}

		const response = await request(`${this.api}${options.url}`, {
			method: options.method,
			body: options.body,
			query: options.query,
			headers: {
				...this.headers,
				...options.headers,
			},
		});

		let data = "";
		for await (const chunk of response.body) {
			data += chunk;
		}

		return JSON.parse(data) as T;
	}
}