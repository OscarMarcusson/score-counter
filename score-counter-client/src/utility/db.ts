export class Database {
  static database: any = {};

  static async getData(key: string): Promise<MatchData> {
    const data = Database.database[key];
    if (data) return data;

    const url = `/assets/data/${key}.json`;
    const newData = await fetch(url);
    const json = await newData.json() as MatchData;
    Database.database[key] = json;
    return json;
  }
}

export interface MatchData {
  name: string;
  description: string;
  actions: MatchActions;
}

export interface MatchActions {
  good: Record<string, MatchAction>;
  bad: Record<string, MatchAction>;
  neutral: Record<string, MatchAction>;
}

export interface MatchAction {
  name: string;
  score: number;
}
