import { APIRequestContext } from '@playwright/test';

export class HttpClient {
  constructor(
    protected request: APIRequestContext,
    protected baseUrl: string
  ) {}

  async get(endpoint: string, params?: any, headers?: any) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.request.get(url, { params, headers });
    return response;
  }
}