import { Client, RichMenu as RichMenuScheme } from "@line/bot-sdk";
import { config } from "dotenv";

config();

class RichMenu {
  private readonly client: Client;

  constructor(channelAccessToken: string) {
    this.client = new Client({
      channelAccessToken,
    });
  }

  /**
   * @param richMenuScheme リッチメニューを構成するオブジェクト
   * @description リッチメニューの作成
   * @returns 作成されたリッチメニューのID
   */
  async createRichMenu(richMenuScheme: RichMenuScheme): Promise<string> {
    try {
      const richMenuId = await this.client.createRichMenu(richMenuScheme);
      console.info("リッチメニューの作成が成功しました");
      return richMenuId;
    } catch (err) {
      console.error("リッチメニューの作成が失敗しました");
      console.error(err);
      return "";
    }
  }

  /**
   * @param richMenuId リッチメニューを構成するオブジェクト
   * @param img リッチメニューに登録する画像のバイナリ
   * @description リッチメニューへの画像の登録
   * @returns リッチメニューに画像が登録できたかのBool値
   */
  async setRichMenuImage(richMenuId: string, img: Buffer): Promise<boolean> {
    let isSuccess: boolean;
    try {
      await this.client.setRichMenuImage(richMenuId, img);
      isSuccess = true;
      console.info("リッチメニューへの画像の登録が成功しました");
    } catch (err) {
      isSuccess = false;
      console.error("リッチメニューへの画像の登録が失敗しました");
      console.error(err);
    }
    return isSuccess;
  }
}

const richMenu = new RichMenu(process.env.CHANNEL_ACCESS_TOKEN!);
