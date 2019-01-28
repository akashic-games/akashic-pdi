import * as g from "@akashic/akashic-engine";

export const enum PointType {
	Down,
	Move,
	Up
}

/**
 * プラットフォームのポイントイベント。
 *
 * 利用側で `g.PointDownEvent` などに変換される、プラットフォームのポイントイベント。
 * `g.PointDownEvent` などと異なるのは、ターゲットエンティティ(`target`)が解決されていないという点である。
 * (ターゲットエンティティやローカルフラグは `g.Game` を参照しないと解決できない。PDIのレイヤではそれらに関知しない。)
 */
export interface PointEvent {
	/**
	 * ポイントイベントの種類。
	 */
	type: PointType;

	/**
	 * (同時に発生しうる)ポイントイベントを区別する識別子。
	 */
	identifier: number;

	/**
	 * ポイントイベントの生じた位置。
	 * プライマリサーフェスの左上を原点とする。
	 */
	offset: g.CommonOffset;
}

