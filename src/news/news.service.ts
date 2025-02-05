import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Injectable()
export class NewsService {
  private readonly apiUrl = 'https://newsdata.io/api/1/news';
  private readonly apiKey = process.env.NEWSDATA_API_KEY; 
  constructor(private readonly httpService: HttpService) {}

  async getNews(): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(this.apiUrl, {
          params: { apikey: this.apiKey },
        })
      );
      return response.data; 
    } catch (error) {
      throw new Error(`Error fetching news: ${error.message}`);
    }
  }
}
