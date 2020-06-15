import { CommonSize } from "../commons";
import { SurfaceAtlasSlot } from "./SurfaceAtlasSlot";
import { Surface } from "../surface/Surface";

/**
 * サーフェスアトラス。
 *
 * 与えられたサーフェスの指定された領域をコピーし一枚のサーフェスにまとめる。
 */
export interface SurfaceAtlas {
	/**
	 * @private
	 */
	_surface: Surface;

	/**
	 * @private
	 */
	_accessScore: number;

	/**
	 * サーフェスを追加する。
	 *
	 * @param surface 追加するサーフェス
	 * @param offsetX サーフェス内におけるX方向のオフセット位置。0以上の数値でなければならない
	 * @param offsetY サーフェス内におけるY方向のオフセット位置。0以上の数値でなければならない
	 * @param width サーフェス内における矩形の幅。0より大きい数値でなければならない
	 * @param height サーフェス内における矩形の高さ。0より大きい数値でなければならない
	 */
	addSurface(surface: Surface, offsetX: number, offsetY: number, width: number, height: number): SurfaceAtlasSlot | null;

	/**
	 * サーフェスアトラスの大きさを取得する。
	 */
	getAtlasUsedSize(): CommonSize;

	/**
	 * このサーフェスアトラスの破棄を行う。
	 */
	destroy(): void;

	/**
	 * このサーフェスアトラスが破棄済みであるかどうかを判定する。
	 */
	destroyed(): boolean;
}
