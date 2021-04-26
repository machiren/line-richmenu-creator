import { Client, RichMenu as RichMenuSchemeType, RichMenuResponse } from "@line/bot-sdk";
import { config } from "dotenv";
import { createReadStream } from "fs";
import { Readable } from "stream";
import * as RichMenuScheme from "./src/rich-menu-scheme/index";

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
  async createRichMenu(richMenuScheme: RichMenuSchemeType): Promise<string> {
    try {
      const richMenuId = await this.client.createRichMenu(richMenuScheme);
      console.info("リッチメニューの作成が成功しました");
      console.info(`リッチメニューID: ${richMenuId}`);
      return richMenuId;
    } catch (err) {
      console.error("リッチメニューの作成が失敗しました");
      console.error(err);
      return "";
    }
  }

  /**
   * @param richMenuScheme リッチメニューを構成するオブジェクト
   * @description リッチメニューの作成
   * @returns 作成されたリッチメニューのID
   */
  async getRichMenus(): Promise<RichMenuResponse[]> {
    try {
      const richMenus = await this.client.getRichMenuList();
      console.info("リッチメニューリストの取得が成功しました");
      console.log(richMenus);
      return richMenus;
    } catch (err) {
      console.error("リッチメニューの作成が失敗しました");
      console.error(err);
      throw err;
    }
  }

  /**
   * @param richMenuId リッチメニューを構成するオブジェクト
   * @param img リッチメニューに登録する画像のバイナリ
   * @description リッチメニューへの画像の登録
   * @returns リッチメニューに画像が登録できたかのBool値
   */
  async setRichMenuImage(
    richMenuId: string,
    img: Buffer | Readable
  ): Promise<boolean> {
    let isSuccess: boolean;
    try {
      await this.client.setRichMenuImage(richMenuId, img);
      isSuccess = true;
      console.info("リッチメニューへの画像の登録が成功しました");
    } catch (err) {
      isSuccess = false;
      console.error(err);
      console.error("リッチメニューへの画像の登録が失敗しました");
    }
    return isSuccess;
  }

  /**
   * @param richMenuId リッチメニューID
   * @description リッチメニューの削除
   * @returns リッチメニューが削除できたかのBool値
   */
  async deleteRichMenu(richMenuId: string) {
    let isSuccess: boolean;
    try {
      await this.client.deleteRichMenu(richMenuId);
      isSuccess = true;
      console.info("リッチメニューの削除が成功しました");
    } catch (err) {
      isSuccess = false;
      console.error("リッチメニューの削除が失敗しました");
    }
    return isSuccess;
  }

  /**
   * @param richMenuId リッチメニューID
   * @description デフォルトリッチメニューの設定
   * @returns デフォルトリッチメニューが設定できたかのBool値
   */
  async setDefaultRichMenu(richMenuId: string) {
    let isSuccess: boolean;
    try {
      await this.client.setDefaultRichMenu(richMenuId);
      isSuccess = true;
      console.info("デフォルトリッチメニューの設定が成功しました");
    } catch (err) {
      isSuccess = false;
      console.error("デフォルトリッチメニューの設定が失敗しました");
    }
    return isSuccess;
  }
}

const richMenu = new RichMenu(process.env.CHANNEL_ACCESS_TOKEN!);

// リッチメニュー取得
// richMenu.getRichMenus();

// リッチメニュー作成
// richMenu.createRichMenu()
// richMenu.createRichMenu()

// リッチメニュー削除
// richMenu.deleteRichMenu();
// richMenu.deleteRichMenu();

// リッチメニュー画像セット
// richMenu.setRichMenuImage();
// richMenu.setRichMenuImage();

// リッチメニューデフォルト設定
// richMenu.setDefaultRichMenu()